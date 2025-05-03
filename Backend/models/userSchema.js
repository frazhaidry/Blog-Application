const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  emailId: { type: String, unique: true },
  password: String,
});

// Instance method to compare passwords
userSchema.methods.validatePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

// Instance method to generate JWT
userSchema.methods.getJWT = function () {
  return jwt.sign({ _id: this._id }, "BLOG@Secret$123", { expiresIn: "8h" });
};

module.exports = mongoose.model("User", userSchema);
 