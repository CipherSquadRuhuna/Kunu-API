"use strict";
const { Model } = require("sequelize");

const GarbageComplain = (sequelize, DataTypes) => {
  class GarbageComplain extends Model {}
  GarbageComplain.init(
    {
      id: {
        type: DataTypes.NUMBER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      user_id: {
        type: DataTypes.NUMBER,
        allowNull: false,
      },
      location: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      attached_image: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      remarks: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "GarbageComplain",
      tableName: "garbage_complains",
    }
  );
  return GarbageComplain;
};

module.exports = GarbageComplain;
