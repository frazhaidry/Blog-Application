const jwt = require("jsonwebtoken");
const User = require("../models/userSchema");

const userAuth = async (req, res, next) => {
  try {
    const { token } = req.cookies;
    if (!token) return res.status(401).send("Please Login!");

    const decoded = jwt.verify(token, "BLOG@Secret$123");
    const user = await User.findById(decoded._id);
    if (!user) throw new Error("User not found");

    req.user = user;
    next();
  } catch (error) {
    res.status(400).send("ERROR: " + error.message);
  }
};

module.exports = { userAuth };
