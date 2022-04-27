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
router.post('/new', magicItemCtrl.createNew);

// SPECIFIC MAGIC ITEM ROUTES
// /user/:username/character/:character._id/magicitems/magicitem._id

// DELETE

// UPDATE

// SHOW


module.exports = router;
