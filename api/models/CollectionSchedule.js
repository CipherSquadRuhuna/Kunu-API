"use strict";
const { Model } = require("sequelize");

const CollectionSchedule = (sequelize, DataTypes) => {
  class CollectionSchedule extends Model {}
  CollectionSchedule.init(
    {
      id: {
        type: DataTypes.NUMBER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      w_id: {
        type: DataTypes.NUMBER,
        allowNull: false,
      },
      ward_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      degradable: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      non_degradable: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      recyclable: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "CollectionSchedule",
      tableName: "collection_schedules",
    }
  );
  return CollectionSchedule;
};

module.exports = CollectionSchedule;
