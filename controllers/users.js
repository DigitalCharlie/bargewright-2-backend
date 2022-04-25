const User = require('../models/User');
const Character = require('../models/Character')
const Adventure = require('../models/Adventure')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

module.exports = {
  create,
  login,
  checkToken,
  testDb,
  getAllChars,
  deleteUser
};

// AUTH

function checkToken(req, res) {
  console.log('req.user', req.user);
  res.status(200).json(req.exp);
}

// USER CREATION AND LOGIN

async function login(req, res) {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) throw new Error();
    const match = await bcrypt.compare(req.body.password, user.password);
    if (!match) throw new Error();
    res.status(200).json( createJWT(user) );
  } catch {
    res.status(400).json('Bad Credentials');
  }
}

async function create(req, res) {
  try {
    const user = await User.create(req.body);
    // token will be a string
    const token = createJWT(user);
    // send back the token as a string
    // which we need to account for
    // in the client
    res.status(200).json(token);
  } catch (e) {
    res.status(400).json(e);
  }
}

// TEST

async function testDb (req,res) {
    try {
        res.send('test success')
    } catch (err) {
        res.status(400).json(err)
    }
}


/*-- Helper Functions --*/

function createJWT(user) {
  return jwt.sign(
    // data payload
    { user },
    process.env.SECRET,
    { expiresIn: '24h' }
  );
}


// USER INFO FUNCTIONS

async function getAllChars(req,res) {
	try {
		const allChars = await Character.find({player: req.params.username});
		res.status(200).json(allChars);
	} catch (e) {
		res.status(400).json(e);
	}
}

// DELETE — and also delete characters and adventures.
// also deletes the associated characters and adventures
// this isn't actually working vv it's only deleting the user. if i comment out the user delete, it does delete the characters.

async function deleteUser (req,res) {
	try {
    const userCharacters = await Character.find({player:req.params.username})
    userCharacters.forEach(character => {
      const deletedAdventures = Adventure.deleteMany({character: character._id})
    })
    const deletedCharacters = await Character.deleteMany({player: req.params.username})
    console.log(deletedCharacters)
    const user = await User.findOne({username: req.params.username})
		const deletedUser = await User.findByIdAndDelete(user._id)
		res.status(200).json(deletedUser);
	} catch (err) {
        res.status(400).json(err)
    }
}