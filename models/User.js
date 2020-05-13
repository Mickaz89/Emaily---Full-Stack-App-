const mongoose = require("mongoose");
const { Schema } = mongoose;
const crypto = require('crypto')
const passportLocalMongoose = require('passport-local-mongoose');

var options = {
  errorMessages: {
    MissingPasswordError: 'No password was given',
    AttemptTooSoonError: 'Account is currently locked. Try again later',
    TooManyAttemptsError: 'Account locked due to too many failed login attempts',
    NoSaltValueStoredError: 'Authentication not possible. No salt value stored',
    IncorrectPasswordError: 'Password or username are incorrect',
    IncorrectUsernameError: 'Password or username are incorrect',
    MissingUsernameError: 'No username was given',
    UserExistsError: 'A user with the given username is already registered'
  }
};


const userSchema = new Schema({
  role: String,
  username: String,
  password: String,
  name: String
});


userSchema.plugin(passportLocalMongoose, options);

mongoose.model("users", userSchema);