"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const districts = [
      { name: "Ampara", created_at: new Date(), updated_at: new Date() },
      { name: "Anuradhapura", created_at: new Date(), updated_at: new Date() },
      { name: "Badulla", created_at: new Date(), updated_at: new Date() },
      { name: "Batticaloa", created_at: new Date(), updated_at: new Date() },
      { name: "Colombo", created_at: new Date(), updated_at: new Date() },
      { name: "Galle", created_at: new Date(), updated_at: new Date() },
      { name: "Gampaha", created_at: new Date(), updated_at: new Date() },
      { name: "Hambantota", created_at: new Date(), updated_at: new Date() },
      { name: "Jaffna", created_at: new Date(), updated_at: new Date() },
      { name: "Kalutara", created_at: new Date(), updated_at: new Date() },
      { name: "Kandy", created_at: new Date(), updated_at: new Date() },
      { name: "Kegalle", created_at: new Date(), updated_at: new Date() },
      { name: "Kilinochchi", created_at: new Date(), updated_at: new Date() },
      { name: "Kurunegala", created_at: new Date(), updated_at: new Date() },
      { name: "Mannar", created_at: new Date(), updated_at: new Date() },
      { name: "Matale", created_at: new Date(), updated_at: new Date() },
      { name: "Matara", created_at: new Date(), updated_at: new Date() },
      { name: "Moneragala", created_at: new Date(), updated_at: new Date() },
      { name: "Mullaitivu", created_at: new Date(), updated_at: new Date() },
      { name: "Nuwara Eliya", created_at: new Date(), updated_at: new Date() },
      { name: "Polonnaruwa", created_at: new Date(), updated_at: new Date() },
      { name: "Puttalam", created_at: new Date(), updated_at: new Date() },
      { name: "Ratnapura", created_at: new Date(), updated_at: new Date() },
      { name: "Trincomalee", created_at: new Date(), updated_at: new Date() },
      { name: "Vavuniya", created_at: new Date(), updated_at: new Date() },
    ];

    await queryInterface.bulkInsert("districts", districts);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("districts", null, {});
  },
};
