const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const WorkoutSchema = new Schema({
  title: {
      type: String,
      required: true,
      minlength: 4
  },
  desc: {
      type: String,
      required: true,
      minlength: 4
  },
  cbpm: {
      type: Number,
      min: 10
  },
  date: {
      type: Date,
      default: new Date()
  }
});

const Workout = mongoose.model('Workout', WorkoutSchema);

module.exports = Workout;