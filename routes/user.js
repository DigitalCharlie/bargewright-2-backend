// /user/

// DEPENDNCIES
const express = require('express');
const router = express.Router();
const usersCtrl = require('../controllers/users');

// UPDATE
router.put('/:username', usersCtrl.update)

// DELETE
router.delete('/:username', usersCtrl.deleteUser)

// SHOW

// ALL CHARS
router.get('/:username/all', usersCtrl.getAllChars)


module.exports = router;
