const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  role: String,
  rank: String,
  postingArea: String,
  serviceYears: Number,
  age: Number
});

module.exports = mongoose.model("User", userSchema);
