// /user/

// DEPENDNCIES
const express = require('express');
const router = express.Router();
const usersCtrl = require('../controllers/users');

const ensureLoggedIn = require('../config/ensureLoggedIn');
const ensureAuthorized = require('../config/ensureAuthorized');


// UPDATE
router.put('/:username', ensureLoggedIn, ensureAuthorized, usersCtrl.update)

// DELETE
router.delete('/:username', ensureLoggedIn, ensureAuthorized, usersCtrl.deleteUser)

// SHOW

// ALL CHARS
router.get('/:username/all', ensureLoggedIn, ensureAuthorized, usersCtrl.getAllChars)


module.exports = router;
