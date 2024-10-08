"use strict";
const { Model } = require("sequelize");

const District = (sequelize, DataTypes) => {
  class District extends Model {}

  District.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        
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

  // Associations
  District.associate = function (models) {
    // District has many Municipal Councils
    District.hasMany(models.MunicipalCouncil, { foreignKey: 'district_id' });
  };

  return District;
};

module.exports = District;
