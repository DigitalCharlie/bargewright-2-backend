// /user/:username/character

// DEPENDNCIES
const express = require('express');
const router = express.Router();
const ensureLoggedIn = require('../config/ensureLoggedIn');
const charCtrl = require('../controllers/characters')

// TEST
// router.get('/', charCtrl.test);

// CREATE

router.post('/new', charCtrl.createNew);


// SPECIFIC CHARACTER ROUTES
// /user/:username/character/character._id

// DELETE

// UPDATE
router.put('/:id/edit', charCtrl.update)

// SHOW
router.get('/:id', charCtrl.show)


module.exports = router;
