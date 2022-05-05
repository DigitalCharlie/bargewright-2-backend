require('dotenv').config()
require('./config/connection');
const express = require('express')
const app = express()
const cors = require('cors');
const PORT = process.env.PORT || 8080

// MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use(require('./config/checkToken'));
const ensureLoggedIn = require('./config/ensureLoggedIn');
const ensureAuthorized = require('./config/ensureAuthorized');

// ROUTING
app.use('/', require('./routes/home'));
app.use('/user/', ensureLoggedIn, ensureAuthorized, require('./routes/user'));
app.use('/user/:username/character', require('./routes/character'));
app.use('/user/:username/character/:charId/adventure', ensureLoggedIn, ensureAuthorized, require('./routes/adventures'));
app.use('/user/:username/character/:charId/magicitem', ensureLoggedIn, ensureAuthorized, require('./routes/magicitems'));
app.use('/user/:username/character/:charId/downtime', ensureLoggedIn, ensureAuthorized, require('./routes/downtime'));



// LISTENING
app.listen(PORT, () => {
    console.log(`Link is paying attention to Navi on port ${PORT}`)
});