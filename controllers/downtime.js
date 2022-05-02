const Downtime = require('../models/DowntimeActivity')

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
		res.status(200).json(newDowntime);
	} catch (e) {
		res.status(400).json(e);
	}
}

async function show (req,res) {
	try {
		const downtime = await Downtime.findById(req.params.id).populate('magicItemGained').populate('character');
		res.status(200).json(downtime);
	} catch (e) {
		res.status(400).json(e);
	}
}

async function update (req,res) {
	try {
		const updatedDowntime = await Downtime.findByIdAndUpdate(req.params.id, req.body);
		res.status(200).json(updatedDowntime);
	} catch (e) {
		res.status(400).json(e);
	}
}



// DELETE DOWNTIME

async function deleteDowntime (req,res) {
	try {
		const deletedDowntime = await Downtime.findByIdAndDelete(req.params.id)
		res.status(200).json(deletedDowntime);
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