const Adventure = require('../models/Adventure')
const Character = require('../models/Character')
const MagicItem = require('../models/MagicItem')

module.exports = {
	show,
	createNew,
	deleteMagicItem,
	update,
	test
};

// SHOW
async function show (req,res) {
	try {
		const magicItem = await MagicItem.findById(req.params.id).populate('character').populate('adventureFound');
		res.status(200).json(magicItem);
	} catch (e) {
		res.status(400).json(e);
	}
}

// CREATE
async function createNew (req,res) {
	try {
		const newMagicItem = await MagicItem.create(req.body);
		addMagicToChar(newMagicItem)
		if(newMagicItem.adventureFound) addMagicToAdv(newMagicItem)
		res.status(200).json(newMagicItem);
	} catch (e) {
		res.status(400).json(e);
	}
}

// UPDATE
async function update (req,res) {
	try {
		const magicItem = await MagicItem.findByIdAndUpdate(req.params.id, req.body);
		res.status(200).json(magicItem);
	} catch (e) {
		res.status(400).json(e);
	}
}



// DELETE
async function deleteMagicItem (req,res) {
	try {
		const deletedMagic = await MagicItem.findByIdAndDelete(req.params.id)
		res.status(200).json(deletedMagic);
	} catch (err) {
        res.status(400).json(err)
    }
}


async function test (req,res) {
    try {
        res.send('test success')
    } catch (err) {
        res.status(400).json(err)
    }
}





// Add a new magic item to a character

async function addMagicToChar (createdMagicItem) {
	const char = await Character.findById(createdMagicItem.character)
	char.magicItems.push(createdMagicItem._id)
	char.save()
}

// Add new magic item to adventure

async function addMagicToAdv (createdMagicItem) {
	const adv = await Adventure.findById(createdMagicItem.adventureFound)
	adv.magicItems.push(createdMagicItem._id)
	adv.save()
}