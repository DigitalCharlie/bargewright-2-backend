// /user/:username/character/:character._id/downtime

// DEPENDNCIES
const express = require('express');
const router = express.Router();
const ensureLoggedIn = require('../config/ensureLoggedIn');
const downtimeCtrl = require('../controllers/downtime')

// INDEX

// CREATE
router.post('/', downtimeCtrl.createNew);

// SPECIFIC DOWNTIME ROUTES
// /user/:username/character/:character._id/downtime/downtime._id

// DELETE
router.delete('/:id', downtimeCtrl.deleteDowntime)

// UPDATE
router.put('/:id/', downtimeCtrl.update)

// SHOW
router.get('/:id', downtimeCtrl.show);

// TEST
// router.get('/', downtimeCtrl.test);



module.exports = router;
