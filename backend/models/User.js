const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  phoneNumber: String,
  password: String,
  qrCode: String,
});

module.exports = mongoose.model("User", UserSchema);
