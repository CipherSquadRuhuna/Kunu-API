// models/municipalCouncil.js
module.exports = (sequelize, DataTypes) => {
    const MunicipalCouncil = sequelize.define('MunicipalCouncil', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      council_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      district_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Districts',
          key: 'id',
        },
      },
    });
  
    // MunicipalCouncil.associate = (models) => {
    //   // MunicipalCouncil belongs to District
    //   MunicipalCouncil.belongsTo(models.District, { foreignKey: 'district_id' });
      
    //   // MunicipalCouncil has many SubCouncils
    //   MunicipalCouncil.hasMany(models.SubCouncil, { foreignKey: 'municipal_council_id' });
    // };
  
    return MunicipalCouncil;
  };
  