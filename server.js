require('dotenv').config()
require('./config/connection');
const express = require('express')
const app = express()
const cors = require('cors')
const PORT = process.env.PORT || 8080

// MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use(require('./config/checkToken'));

// ROUTING
app.use('/', require('./routes/home'));
app.use('/user/', require('./routes/user'));
app.use('/user/:username/character', require('./routes/character'));


// LISTENING
app.listen(PORT, () => {
    console.log(`Link is paying attention to Navi on port ${PORT}`)
});