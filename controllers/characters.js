const Character = require('../models/Character')
const Adventure = require('../models/Adventure')


module.exports = {
	createNew,
	show,
	update,
	getAllAdv,
	deleteChar,
	test
};

async function createNew (req,res) {
	try {
		const char = await Character.create(req.body);
		res.status(200).json(char);
	} catch (e) {
		res.status(400).json(e);
	}
}

async function show (req,res) {
	try {
		const char = await Character.findById(req.params.id);
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
		const allAdv = await Adventure.find({character: req.params.id});
		res.status(200).json(allAdv);
	} catch (e) {
		res.status(400).json(e);
	}
}

// DELETE CHAR
// also deletes the associated adventures

async function deleteChar (req,res) {
	try {
		const deletedAdventures = await Adventure.deleteMany({character: req.params.id})
		console.log(deletedAdventures)
		const deletedChar = await Character.findByIdAndDelete(req.params.id)
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

