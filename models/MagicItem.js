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
    attunement:Boolean,
    itemCategory: {
        type:String,
        enum:['scroll', 'potion', 'permanent', 'consumable']
    },
    status: {
        type:String,
        enum:['owned', 'destroyed', 'traded'],
        default: 'owned'
    }
})

module.exports = mongoose.model('MagicItem', magicItemSchema);