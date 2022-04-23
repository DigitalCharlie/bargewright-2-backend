const mongoose = require('mongoose');

const magicItemSchema = new Schema({
    character: String,
    adventureFound:String,
    downtimeActivity:String,
    name:String,
    effects:String,
    flavor:String,
    lost: {
        type:Boolean,
        default: false
    }
})

module.exports = mongoose.model('MagicItem', magicItemSchema);