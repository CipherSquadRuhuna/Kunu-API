// services/authService.js
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = process.env;

const generateToken = (user, expiresIn) => {
  return jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn });
};

const hashPassword = (password) => {
  return bcrypt.hashSync(password, 10);
};

const comparePassword = (password, hash) => {
  return bcrypt.compareSync(password, hash);
};

module.exports = { generateToken, hashPassword, comparePassword };
