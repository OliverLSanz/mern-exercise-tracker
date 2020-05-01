const mongoose = require('mongoose')

const Schema = mongoose.Schema;

// create mongoose schema. we define each field and then the validations we will
// pass it through
const userSchema = new Schema({
  username: {  // define username field
    type: String,  // it should be a string
    required: true,  // it should be a required field
    unique: true,  // it should be a a unique field
    trim: true,  // trims spaces at the end
    minlength: 3  // minimum: 3 characters
  },
}, {
  timestamps: true,  // include timestamps for creation and modification
});

const User = mongoose.model('User', userSchema);  // 'user' could be anything

module.exports = User;
