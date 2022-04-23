const mongoose = require('mongoose');

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
})

module.exports = mongoose.model('Character', characterSchema);