const Character = require('../models/Character')

module.exports = {
	createNew,
	show,
	test,
	update
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
		const char = await Character.findByIdAndUpdate(req.params.id);
		res.status(200).json(char);
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