// DEPENDNCIES
const express = require('express');
const router = express.Router();
const usersCtrl = require('../controllers/users');
const ensureLoggedIn = require('../config/ensureLoggedIn');

// POST /users
router.post('/', usersCtrl.create);

// POST /users/login
router.post('/login', usersCtrl.login);

// GET /users/check-token
router.get('/check-token', ensureLoggedIn, usersCtrl.checkToken);

router.get('/test', usersCtrl.testDb)

module.exports = router;
