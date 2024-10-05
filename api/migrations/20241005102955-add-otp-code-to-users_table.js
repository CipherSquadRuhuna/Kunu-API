"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Add the otp_code column
    await queryInterface.addColumn("users", "otp_code", {
      type: Sequelize.STRING, // You can change the type as needed
      allowNull: true, // Set to false if you want this column to be required
    });
  },

  down: async (queryInterface, Sequelize) => {
    // Remove the otp_code column
    await queryInterface.removeColumn("your_table_name", "otp_code");
  },
};
