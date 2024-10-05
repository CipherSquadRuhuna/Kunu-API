"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Add 'nic' column to the 'users' table
    await queryInterface.addColumn("users", "nic", {
      type: Sequelize.STRING, // Set the type as STRING
      allowNull: true, // Allow null values (you can set this to false if required)
    });
  },

  down: async (queryInterface, Sequelize) => {
    // Remove 'nic' column from the 'users' table
    await queryInterface.removeColumn("users", "nic");
  },
};
