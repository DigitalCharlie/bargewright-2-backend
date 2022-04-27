const Adventure = require('../models/Adventure')
const Character = require('../models/Character')
const MagicItem = require('../models/MagicItem')

module.exports = {
	createNew,
	test
};

async function createNew (req,res) {
	try {
		const newMagicItem = await MagicItem.create(req.body);
		res.status(200).json(newMagicItem);
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