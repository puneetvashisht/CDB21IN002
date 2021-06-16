// Schema

const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const WeightLogSchema = new Schema({
  weight: {
      type: Number,
      required: true,
      min: 20
  },
  loggedAt: {
      type: Date,
      default: new Date()
  },
  user: {
      type: Schema.Types.ObjectId,
      ref: 'Users',
      required: true     
  }
});

// Model

const WeightLog = mongoose.model('WeightLog', WeightLogSchema);

module.exports = WeightLog;