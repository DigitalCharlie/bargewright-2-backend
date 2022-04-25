// /user/:username/character/:character._id/adventure

// DEPENDNCIES
const express = require('express');
const router = express.Router();
const ensureLoggedIn = require('../config/ensureLoggedIn');
const advCtrl = require('../controllers/adventures')


// INDEX (may not have this since it's on the character page)

// TEST
// router.get('/', advCtrl.test);

// CREATE

router.post('/new', advCtrl.createNew);


// SPECIFIC ADVENTURE ROUTES
// /user/:username/character/:character._id/adventure/adventure._id

// DELETE
router.delete('/:id', advCtrl.deleteAdv)


// UPDATE
router.put('/:id/edit', advCtrl.update)

// SHOW
router.get('/:id', advCtrl.show);


module.exports = router;
