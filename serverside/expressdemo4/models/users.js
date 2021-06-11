const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const UsersSchema = new Schema({
  email: {
      type: String,
      required: true,
      unique: true,
      minlength: 4
  },
  password: {
      type: String,
      required: true,
      minlength: 4
  },
  registeredAt: {
      type: Date,
      default: new Date()
  }
});

const Users = mongoose.model('Users', UsersSchema);

module.exports = Users;