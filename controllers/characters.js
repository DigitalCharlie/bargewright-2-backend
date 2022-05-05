const Character = require('../models/Character')
const Adventure = require('../models/Adventure')
const User = require('../models/User');
const MagicItem = require('../models/MagicItem')
const Downtime = require('../models/DowntimeActivity')

module.exports = {
	createNew,
	show,
	update,
	getAllAdv,
	getAllMagicItems,
	getAllDowntime,
	deleteChar,
	test
};

async function createNew (req,res) {
	try {
		const char = await Character.create(req.body);
		addCharToUser(char)
		res.status(200).json(char);
	} catch (e) {
		res.status(400).json(e);
	}
}

async function show (req,res) {
	try {
		const char = await Character.findById(req.params.id).populate('adventures');
		res.status(200).json(char);
	} catch (e) {
		res.status(400).json(e);
	}
}

async function update (req,res) {
	try {
		const char = await Character.findByIdAndUpdate(req.params.id, req.body);
		res.status(200).json(char);
	} catch (e) {
		res.status(400).json(e);
	}
}

// GET ALL ADVENTURES

async function getAllAdv(req,res) {
	try {
		const allAdv = await Adventure.find({character: req.params.id}).populate('magicItems')
		res.status(200).json(allAdv);
	} catch (e) {
		res.status(400).json(e);
	}
}

// GET ALL MAGIC ITEMS

async function getAllMagicItems(req,res) {
	try {
		const allMagicItems = await MagicItem.find({character: req.params.id}).populate(['adventureFound', 'downtimeActivity']);
		res.status(200).json(allMagicItems);
	} catch (e) {
		res.status(400).json(e);
	}
}

// GET ALL DOWNTIME
async function getAllDowntime(req,res) {
	try {
		const allDowntime = await Downtime.find({character: req.params.id}).populate('magicItemGained').populate('magicItemLost');
		res.status(200).json(allDowntime);
	} catch (e) {
		res.status(400).json(e);
	}
}

// DELETE CHAR
// also deletes the associated adventures

async function deleteChar (req, res) {
	try {
		const deletedAdventures = await Adventure.deleteMany({character: req.params.id})
		const deletedMagicItems = await MagicItem.deleteMany({character: req.params.id})
		console.log(deletedAdventures)
		console.log(deletedMagicItems)
		const deletedChar = await Character.deleteOne({_id: req.params.id})
		res.status(200).json(deletedChar);
	} catch (err) {
        res.status(400).json(err)
    }
}

// TEST
async function test (req,res) {
    try {
        res.send('test success')
    } catch (err) {
        res.status(400).json(err)
    }
}

// ALSO PUSH THE NEW CHAR TO USER

async function addCharToUser (createdChar) {
	const user = await User.findOne({username: createdChar.player})
	user.characters.push(createdChar._id)
	user.save()
}