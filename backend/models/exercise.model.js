// more documenting at user.mode.js
const mongoose = require('mongoose')

const Schema = mongoose.Schema;

// create mongoose schema
const exerciseSchema = new Schema({
  username: { type: String, required: true },
  description: { type: String, required: true },
  duration: { type: Number, required: true },
  date: { type: Date, required: true },
}, {
  timestamps: true,  // include timestamps for creation and modification
});

const Exercise = mongoose.model('Exercise', exerciseSchema);  // 'exercise' could be anything

module.exports = Exercise;
