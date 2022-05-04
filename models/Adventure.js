const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const advSchema = new Schema({
    character: {
        type:Schema.Types.ObjectId, 
        ref:'Character'
    },
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
    healingPotions: Number,
    magicItems: [{
        type:Schema.Types.ObjectId, 
        ref:'MagicItem'
    }],
    magicItemsFound:Number,
    storyAwards: Array,
})

// // HOW CAN I GET THIS TO WORK?
advSchema.pre('save', async function(next) {
    this.storyAwards.forEach((award) => {
        award.advId=this._id
        award.advName=this.adventureName
    })
    return next();
});

module.exports = mongoose.model('Adventure', advSchema);