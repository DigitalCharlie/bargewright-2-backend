const mongoose = require('mongoose');

const downtimeSchema = new Schema({
    character: String,
    user:String,
    activity: String,
    downtimeUsed: Number,
    date: Date,
    gold: Number,
    levelGain:Number,
    magicItemGained:String,
    magicItemLost:String,
    healingPotions: Number,
    dmHoursUsed:Number
})

module.exports = mongoose.model('Downtime', downtimeSchema);