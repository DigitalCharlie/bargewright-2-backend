const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const downtimeSchema = new Schema({
    character: {
        type:Schema.Types.ObjectId, 
        ref:'Character'
    },
    user:String,
    activity: String,
    downtimeUsed: Number,
    date: Date,
    gold: Number,
    levelGain:Number,
    magicItemGained:{
        type:Schema.Types.ObjectId, 
        ref:'MagicItem'
    },
    magicItemLost:{
        type:Schema.Types.ObjectId, 
        ref:'MagicItem'
    },
    healingPotions: Number,
    notes: String
})

module.exports = mongoose.model('Downtime', downtimeSchema);