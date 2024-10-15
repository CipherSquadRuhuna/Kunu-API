"use strict";

/** @type {import('sequelize-cli').Seed} */
module.exports = {
  async up(queryInterface, Sequelize) {
    //  create bscrypt password
    const bcrypt = require("bcrypt");
    const hashedPassword1 = await bcrypt.hash("password1", 10);
    await queryInterface.bulkInsert("users", [
      {
        name: "John Doe",
        phone_number: "0711287298",
        is_verified: true,
        district: "Colombo",
        municipal_council: "Colombo MC",
        password: 12345678, // Use a hashed password for security
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Jane Smith",
        phone_number: "0987654321",
        district: "Galle",
        municipal_council: "Galle MC",
        is_verified: true,
        password: "hashedPassword1", // Use a hashed password for security
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Alice Johnson",
        phone_number: "0987654321",
        is_verified: true,
        district: "Kandy",
        municipal_council: "Kandy MC",
        password: "hashed_password_3", // Use a hashed password for security
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  },
};
