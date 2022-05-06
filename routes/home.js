// Home route and logins

// DEPENDNCIES
const express = require('express');
const router = express.Router();
const usersCtrl = require('../controllers/users');
const ensureLoggedIn = require('../config/ensureLoggedIn');

// HOME PAGE
router.get('/', (req,res) => {
	res.send('test')
});


// USER LOGIN AND CREATION

// POST /
router.post('/', usersCtrl.create);

// check is user exists
router.get('/exists/:username', usersCtrl.userExists)

// POST /login
router.post('/login', usersCtrl.login);

// GET /check-token
router.get('/check-token', ensureLoggedIn, usersCtrl.checkToken);

router.get('/test', usersCtrl.testDb)

module.exports = router;
