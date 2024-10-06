const { User } = require("../models/index.js");

const findUserByEmail = async (email) => {
  return User.findOne({ where: { email } });
};

const findUserByPhoneNumber = async (phoneNumber) => {
  return User.findOne({ where: { phone_number: phoneNumber } });
};

const isUserAlreadyExist = async (phoneNumber) =>
  !!(await findUserByPhoneNumber(phoneNumber));

const createUser = async (data) => {
  return User.create(data);
};

const findUserById = async (id) => {
  return User.findByPk(id);
};

module.exports = {
  findUserByEmail,
  findUserByPhoneNumber,
  createUser,
  findUserById,
  isUserAlreadyExist,
};
