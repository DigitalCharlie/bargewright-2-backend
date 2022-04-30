// /user/:username/character/:character._id/magicitems

// DEPENDNCIES
const express = require('express');
const router = express.Router();
const ensureLoggedIn = require('../config/ensureLoggedIn');
const magicItemCtrl = require('../controllers/magicItems')


// TEST
router.get('/test', magicItemCtrl.test);

// INDEX

// CREATE
router.post('/', magicItemCtrl.createNew);

// SPECIFIC MAGIC ITEM ROUTES
// /user/:username/character/:character._id/magicitems/magicitem._id

// DELETE
router.delete('/:id', magicItemCtrl.deleteMagicItem)

// UPDATE
router.put('/:id/', magicItemCtrl.update)

// SHOW
router.get('/:id', magicItemCtrl.show);


module.exports = router;
