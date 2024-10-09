"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Add the otp_code column
    await queryInterface.addColumn("users", "otp_code", {
      type: Sequelize.STRING,
      allowNull: true,
    });
  },

  down: async (queryInterface, Sequelize) => {
    // Remove the otp_code column
    await queryInterface.removeColumn("users", "otp_code");
  },
};
