"use strict";
const { Model } = require("sequelize");

const ServiceComplain = (sequelize, DataTypes) => {
  class ServiceComplain extends Model {}
  ServiceComplain.init(
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

      municiple_councial_id: {
        type: DataTypes.NUMBER,
        allowNull: false,
      },

      complain: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "ServiceComplain",
      tableName: "service_complains",
    }
  );
  return ServiceComplain;
};

module.exports = ServiceComplain;
