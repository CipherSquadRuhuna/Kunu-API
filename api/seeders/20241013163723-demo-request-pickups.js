"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("request_pickups", [
      {
        user_id: 1,
        waste_type: "degradable",
        location: "123 Main St",
        no_of_bags: 3,
        status: "pending",
        payment_status: "pending",
        payment_type: "credit_card",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 2,
        waste_type: "degradable",
        location: "456 Pine Ave",
        no_of_bags: 2,
        status: "pending",
        payment_status: "completed",
        payment_type: "paypal",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("request_pickups", null, {});
  },
};
