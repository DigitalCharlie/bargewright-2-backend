const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const magicItemSchema = new Schema({
    character: {
        type:Schema.Types.ObjectId, 
        ref:'Character'
    },
    adventureFound: {
        type:Schema.Types.ObjectId, 
        ref:'Adventure'
    },    
    downtimeActivity:String,
    name:String,
    effects:String,
    flavor:String,
    rarity:String,
    charges:Number,
    attunement:Boolean,
    itemCategory: {
        type:String,
        enum:['Scroll', 'Potion', 'Permanent', 'Consumable']
    },
    status: {
        type:String,
        enum:['owned', 'destroyed', 'traded', 'consumed'],
        default: 'owned'
    }
})

module.exports = mongoose.model('MagicItem', magicItemSchema);