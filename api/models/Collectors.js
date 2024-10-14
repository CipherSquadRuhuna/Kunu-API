"use strict";

const { Model } = require("sequelize");

const Collectors = (sequelize, DataTypes) => {
  class Collectors extends Model {}
  Collectors.init(
    {
      id: {
        type: DataTypes.NUMBER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      contact: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      waste_types: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Collectors",
      tableName: "collectors",
    }
  );
  return Collectors;
};

module.exports = Collectors;
