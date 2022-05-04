const Downtime = require('../models/DowntimeActivity')
const Character = require('../models/Character')
const MagicItem = require('../models/MagicItem')

module.exports = {
	createNew,
	show,
	update,
	deleteDowntime,
	test
};

async function createNew (req,res) {
	try {
		const newDowntime = await Downtime.create(req.body);
		addDowntimeToChar(newDowntime)
		if (req.body.magicItemLost) {
			const editedMagicItem = await MagicItem.findByIdAndUpdate(req.body.magicItemLost, {status:'traded'})
		}
		res.status(200).json(newDowntime);
	} catch (e) {
		res.status(400).json(e);
	}
}

async function show (req,res) {
	try {
		const downtime = await Downtime.findById(req.params.id).populate('magicItemGained').populate('character').populate('magicItemLost');
		res.status(200).json(downtime);
	} catch (e) {
		res.status(400).json(e);
	}
}

async function update (req,res) {
	try {
		const updatedDowntime = await Downtime.findByIdAndUpdate(req.params.id, req.body);
		const char = await Character.findById(updatedDowntime.character)
		char.save()
		res.status(200).json(updatedDowntime);
	} catch (e) {
		res.status(400).json(e);
	}
}



// DELETE DOWNTIME

async function deleteDowntime (req,res) {
	try {
		const deletedDowntime = await Downtime.findByIdAndDelete(req.params.id)
		const char = await Character.findById(deletedDowntime.character)
		char.save()
		res.status(200).json(deletedDowntime);
	} catch (err) {
        res.status(400).json(err)
    }
}



// Add downtime to character

async function addDowntimeToChar (createdDowntime) {
	const char = await Character.findById(createdDowntime.character)
	char.downtimeActivities.push(createdDowntime._id)
	char.save()
}

// TEST
async function test (req,res) {
    try {
        res.send('test success')
    } catch (err) {
        res.status(400).json(err)
    }
}

