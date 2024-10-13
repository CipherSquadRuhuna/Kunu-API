"use strict";

const { Model } = require("sequelize");

const District = (sequelize, DataTypes) => {
  class District extends Model {}
  District.init(
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
    },
    {
      sequelize,
      modelName: "District",
      tableName: "districts",
    }
  );
  return District;
};

module.exports = District;
