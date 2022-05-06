const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Adventure = require('./Adventure')


const characterSchema = new Schema({
    player: String,
    name: {
        type: String,
        required: true,
        max: 64
    },
    class: {
        type: String,
    },
    race: {
        type: String,
    },
    image:String,
    sheet:String,
    notes:String,
    levelAdjust: Number,
    healthPotionAdjust: Number,
    setting: {
        type:String,
        default:'Forgotten Realms'
    },
    adventures: [{
        type:Schema.Types.ObjectId, 
        ref:'Adventure'
    }],
    magicItems: [{
        type:Schema.Types.ObjectId, 
        ref:'MagicItem'
    }],
    downtimeActivities: [{
        type:Schema.Types.ObjectId, 
        ref:'Downtime'
    }],
    levelTotal:Number
})

// THIS DOESN'T CURRENTLY WORK EITHER -- IT DOESN'T SEEM TO REGISTER THE DOCUMENT STUFF
// NEED TO CHANGE THIS TO WORK WITH A DELETEONE OR SIMILAR SO I CAN ACCESS INFORMATION
// characterSchema.pre('deleteOne', { document: true, query: false }, function(next){
//     console.log(this)
    // const deletedAdventures = Adventure.deleteMany({character: this._id})
    // console.log(deletedAdventures)
// })

// // HOW CAN I GET THIS TO WORK?
characterSchema.pre('save', async function(next) {
    await this.populate('adventures')
    let advLevels = this.adventures.reduce((acc, adv) => acc + parseInt(adv.levelGain), 1)
    let currentLevel = this.levelAdjust + parseInt(advLevels)
    this.levelTotal = currentLevel
    return next();
});

module.exports = mongoose.model('Character', characterSchema);