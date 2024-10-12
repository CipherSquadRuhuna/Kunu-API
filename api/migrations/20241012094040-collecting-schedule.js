"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("collection_schedules", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      w_id: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      ward_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      degradable: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      non_degradable: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      recyclable: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      division: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal(
          "CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"
        ),
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("collection_schedules");
  },
};
