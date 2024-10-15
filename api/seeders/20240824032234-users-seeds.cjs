"use strict";

const { hashPassword } = require("../services/authService");

/** @type {import('sequelize-cli').Seed} */
module.exports = {
  async up(queryInterface, Sequelize) {
    //  create bscrypt password
    const bcrypt = require("bcrypt");
    const hashedPassword1 = hashPassword("12345678");
    await queryInterface.bulkInsert("users", [
      {
        name: "John Doe",
        phone_number: "0711287298",
        is_verified: true,
        district: "Colombo",
        municipal_council: "Colombo MC",
        password: hashedPassword1, // Use a hashed password for security
        nic: "123456789V",
        municipal_council: "Colombo MC",
        district: "Colombo",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Jane Smith",
        phone_number: "0987654321",
        district: "Galle",
        is_verified: true,
        municipal_council: "Galle MC",
        password: hashedPassword1, // Use a hashed password for security
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Alice Johnson",
        phone_number: "0771242254",
        is_verified: true,
        district: "Kandy",
        municipal_council: "Kandy MC",
        password: hashedPassword1, // Use a hashed password for security
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  },
};
