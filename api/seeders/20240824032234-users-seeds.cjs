"use strict";

/** @type {import('sequelize-cli').Seed} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("users", [
      {
        name: "John Doe",
        phone_number: "1234567890",
        district: "Colombo",
        municipal_council: "Colombo MC",
        password: "hashed_password_1", // Use a hashed password for security
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Jane Smith",
        phone_number: "0987654321",
        district: "Galle",
        municipal_council: "Galle MC",
        password: "hashed_password_2", // Use a hashed password for security
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Alice Johnson",
        phone_number: "1122334455",
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
("use strict");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Insert seed data into the 'users' table
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "John Doe",
          phone_number: "1234567890",
          district: "Colombo",
          municipal_council: "Colombo Municipal Council",
          password: "password123", // Use a hashed password in production
          otp_code: "123456",
          is_verified: false, // Set initial value to false
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Jane Smith",
          phone_number: "0987654321",
          district: "Galle",
          municipal_council: "Galle Municipal Council",
          password: "password456", // Use a hashed password in production
          otp_code: "654321",
          is_verified: true, // This user is verified
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    // Delete the seed data from the 'users' table
    await queryInterface.bulkDelete("users", null, {});
  },
};
