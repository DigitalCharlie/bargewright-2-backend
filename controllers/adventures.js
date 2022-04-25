const Adventure = require('../models/Adventure')

module.exports = {
	createNew,
	test
};

async function createNew (req,res) {
	try {
		const newAdv = await Adventure.create(req.body);
		res.status(200).json(newAdv);
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