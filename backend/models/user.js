const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  username: String,
  address: String,
  phone: String,
  gender: String,
  age: Number,
  role: String,
  email: String,
  password: String
});

const Chat = mongoose.model("User", userSchema);
module.exports = Chat;

