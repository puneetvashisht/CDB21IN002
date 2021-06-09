// 3. Create a schema with model
const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const EmployeeSchema = new Schema({
  name: {
      type: String,
      required: true,
      minlength: 4
  },
  salary: Number,
  date: {
      type: Date,
      default: new Date()
  }
});

const Employee = mongoose.model('Employee', EmployeeSchema);

module.exports = Employee;