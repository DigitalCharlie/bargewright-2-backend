const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const magicItemSchema = new Schema({
    character: String,
    adventureFound:String,
    downtimeActivity:String,
    name:String,
    effects:String,
    flavor:String,
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