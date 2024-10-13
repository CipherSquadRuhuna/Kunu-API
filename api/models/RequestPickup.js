"use strict";
const { Model } = require("sequelize");

const RequestPickup = (sequelize, DataTypes) => {
  class RequestPickup extends Model {}
  RequestPickup.init(
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
      waste_type: {
        type: DataTypes.ENUM("degradable", "non-degradable", "recyclable"),
        allowNull: false,
      },
      location: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      no_of_bags: {
        type: DataTypes.NUMBER,
        allowNull: false,
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "pending",
      },
      payment_status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "pending",
      },
      payment_type: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "RequestPickup",
      tableName: "request_pickups",
    }
  );
  return RequestPickup;
};

module.exports = RequestPickup;
