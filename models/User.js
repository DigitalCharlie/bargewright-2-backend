const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const SALT_ROUNDS = 6;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique:true
  },
  email: {
    type: String,
    unique: true,
    trim: true,
    lowercase: true,
    required: true
  },
  password: {
    type: String,
    trim: true,
    minLength: 3,
    required: true
  },
  characters: [{
    type:Schema.Types.ObjectId, 
    ref:'Character'
  }],
  welcomeMessage: {
    type:String,
    default: "Click on any of your characters to view their details, or use the quicklinks to go directly to log a new adventure or downtime activity for them. \r\n \r\nClicking on any of the table headings will sort your characters by that category, and clicking it a second time will reverse the sort. The same is true on your character's individual pages."
  },
}, {
  timestamps: true,
  toJSON: {
    transform: function(doc, ret) {
      delete ret.password;
      return ret;
    }
  }
});

userSchema.pre('save', async function(next) {
  // 'this' is the user doc
  if (!this.isModified('password')) return next();
  // update the password with the computed hash
  this.password = await bcrypt.hash(this.password, SALT_ROUNDS);
  return next();
});

module.exports = mongoose.model('User', userSchema);