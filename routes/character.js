// /user/:username/character

const Character = require('../models/Character')

// DEPENDNCIES
const express = require('express');
const router = express.Router();
const ensureLoggedIn = require('../config/ensureLoggedIn');
const charCtrl = require('../controllers/characters')


// TEST
router.get('/', charCtrl.test);

// CREATE
router.post('/new', (req, res) => {
	try {
		console.log('test')
		const char = await Character.create(req.body);
		console.log(char)
		res.status(200).json(char);
	} catch (e) {
		res.status(400).json(e);
	}
});


// SPECIFIC CHARACTER ROUTES
// /user/:username/character/character._id

// DELETE

// UPDATE

// SHOW



module.exports = router;
