// models/district.js
module.exports = (sequelize, DataTypes) => {
    const District = sequelize.define('District', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
  
    District.associate = (models) => {
      // District has many Municipal Councils
      District.hasMany(models.MunicipalCouncil, { foreignKey: 'district_id' });
    };
  
    return District;
  };
  