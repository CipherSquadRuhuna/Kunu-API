"use strict";
const { Model } = require("sequelize");

const User = (sequelize, DataTypes) => {
  class User extends Model {}
  User.init(
    {
      name: {
        type: DataTypes.STRING,
        unique: true,
      },
      phone_number: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      district: {
        type: DataTypes.STRING,
      },
      municipal_council: {
        type: DataTypes.STRING,
      },
      password: {
        type: DataTypes.STRING,
      },
      otp_code: {
        type: DataTypes.NUMBER,
      },
      is_verified: {
        type: DataTypes.BOOLEAN,
      },
    },
    {
      sequelize,
      modelName: "User",
      tableName: "users",
    }
  );
  return User;
};

module.exports = User;
