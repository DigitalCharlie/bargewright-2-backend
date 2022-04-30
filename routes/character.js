// /user/:username/character

// DEPENDNCIES
const express = require('express');
const router = express.Router();
const ensureLoggedIn = require('../config/ensureLoggedIn');
const charCtrl = require('../controllers/characters')

// DON'T WANT THIS TO STAY BUT USEFUL FOR TESTING
// const Character = require('../models/Character')

// TEST
// router.get('/', charCtrl.test);

// CREATE

router.post('/', charCtrl.createNew);


// SPECIFIC CHARACTER ROUTES
// /user/:username/character/character._id

// DELETE
router.delete('/:id', charCtrl.deleteChar)


// UPDATE
router.put('/:id/', charCtrl.update)


// SHOW
router.get('/:id', charCtrl.show)

// ALL Adventures
router.get('/:id/adventure/all', charCtrl.getAllAdv)

// ALL Magic Items
router.get('/:id/magicitem/all', charCtrl.getAllMagicItems)


module.exports = router;
