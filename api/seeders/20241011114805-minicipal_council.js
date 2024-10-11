"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const councils = [
      {
        name: "Colombo Municipal Council",
        district_id: 1, // Assuming 1 is the ID for Colombo district in the districts table
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Dehiwala - Mt. Lavinia Municipal Council",
        district_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Sri Jayawardenepura Kotte Municipal Council",
        district_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Kaduwela Municipal Council",
        district_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Moratuwa Municipal Council",
        district_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Kollonnawa Urban Council",
        district_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Seethawakapura Urban Council",
        district_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Maharagama Urban Council",
        district_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Kesbewa Urban Council",
        district_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Boralesgamuwa Urban Council",
        district_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Kotikawatta Mulleriyawa Pradeshiya Sabha",
        district_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Seethawaka Pradeshiya Sabha",
        district_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Homagama Pradeshiya Sabha",
        district_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ];

    await queryInterface.bulkInsert("minicipal_council", councils);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("minicipal_council", null, {});
  },
};
