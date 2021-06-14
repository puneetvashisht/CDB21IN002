const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken')

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

// middleware pre
UsersSchema.pre('save',  async function(next){
  console.log('Called before create method..... ****** ', this.password);
  console.log(this);
  this.password = await bcrypt.hash(this.password, saltRounds);
  next();
});

// model method to match passwords .. bcrypt lib
UsersSchema.methods.matchPasswords = async function(enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password)
}

// model method to generate jwt token .. jsonwebtoken
UsersSchema.methods.getSignedJwtToken = function(email) {
    const token = jwt.sign({
        exp: Math.floor(Date.now() / 1000) + (60 * 60),
        data: { email }
    }, 'kjsgjshlslkg');
    console.log(token)
    return token;

}

const Users = mongoose.model('Users', UsersSchema);

module.exports = Users;