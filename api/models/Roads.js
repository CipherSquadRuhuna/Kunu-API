// models/road.js
module.exports = (sequelize, DataTypes) => {
    const Road = sequelize.define('Road', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      waste_type: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      occurrences_per_day: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      municipal_council_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'MunicipalCouncils',
          key: 'id',
        },
      },
    });
  
    Road.associate = (models) => {
      Road.belongsTo(models.MunicipalCouncil, { foreignKey: 'municipal_council_id' });
    };
  
    return Road;
  };
  