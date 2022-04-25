const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const advSchema = new Schema({
    character: String,
    adventureName: {
        type: String,
        required: true
    },
    adventureCode: String,
    datePlayed: Date,
    dungeonMaster: String,
    goldFound: Number,
    downtimeEarned: Number,
    levelGain:Number,
    notes:String,
    magicItemNotes:String,
    healingPotions: Number
})

module.exports = mongoose.model('Adventure', advSchema);