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
    startTime: {
        type: Date
    },
    endTime: {
        type: Date
    },
    createdAt: {
      type: Date,
      default: new Date()
  },
  user: {
      type: Schema.Types.ObjectId,
      ref: 'Users'
  }
});

const Workout = mongoose.model('Workout', WorkoutSchema);

module.exports = Workout;