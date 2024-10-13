"use strict";
const { Model } = require("sequelize");

const MunicipalCouncil = (sequelize, DataTypes) => {
  class MunicipalCouncil extends Model {}
  MunicipalCouncil.init(
    {
      id: {
        type: DataTypes.NUMBER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      district_id: {
        type: DataTypes.NUMBER,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "MunicipalCouncil",
      tableName: "municipal_councils",
    }
  );
  return MunicipalCouncil;
};

module.exports = MunicipalCouncil;
