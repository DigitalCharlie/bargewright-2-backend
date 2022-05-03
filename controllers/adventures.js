const Adventure = require('../models/Adventure')
const Character = require('../models/Character')

module.exports = {
	createNew,
	test,
	update,
	show,
	deleteAdv
};

async function show (req,res) {
	try {
		const adv = await Adventure.findById(req.params.id).populate('character').populate('magicItems');
		res.status(200).json(adv);
	} catch (e) {
		res.status(400).json(e);
	}
}

async function createNew (req,res) {
	try {
		const newAdv = await Adventure.create(req.body);
		addAdvToChar(newAdv)
		res.status(200).json(newAdv);
	} catch (e) {
		res.status(400).json(e);
	}
}

async function update (req,res) {
	try {
		const adv = await Adventure.findByIdAndUpdate(req.params.id, req.body);
		const char = await Character.findById(adv.character)
		char.save()
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
		const char = await Character.findById(deletedAdv.character)
		char.save()
		res.status(200).json(deletedAdv);
	} catch (err) {
        res.status(400).json(err)
    }
}


// Add a new adventure to a character

async function addAdvToChar (createdAdv) {
	const char = await Character.findById(createdAdv.character)
	char.adventures.push(createdAdv._id)
	char.save()
}