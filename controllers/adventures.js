const Adventure = require('../models/Adventure')

module.exports = {
	createNew,
	test,
	update,
	show,
	deleteAdv
};

async function createNew (req,res) {
	try {
		const newAdv = await Adventure.create(req.body);
		res.status(200).json(newAdv);
	} catch (e) {
		res.status(400).json(e);
	}
}

async function show (req,res) {
	try {
		const adv = await Adventure.findById(req.params.id);
		res.status(200).json(adv);
	} catch (e) {
		res.status(400).json(e);
	}
}

async function update (req,res) {
	try {
		const adv = await Adventure.findByIdAndUpdate(req.params.id, req.body);
		res.status(200).json(adv);
	} catch (e) {
		res.status(400).json(e);
	}
}

async function test (req,res) {
    try {
        res.send('test success')
    } catch (err) {
        res.status(400).json(err)
    }
}

// DELETE ADVENTURE

async function deleteAdv (req,res) {
	try {
		const deletedAdv = await Adventure.findByIdAndDelete(req.params.id)
		res.status(200).json(deletedAdv);
	} catch (err) {
        res.status(400).json(err)
    }
}