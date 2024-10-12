"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const councils = [
      {
        name: "Colombo Municipal Council",
        district_id: 1,
      },
      {
        name: "Dehiwala - Mt. Lavinia Municipal Council",
        district_id: 1,
      },
      {
        name: "Sri Jayawardenepura Kotte Municipal Council",
        district_id: 1,
      },
      {
        name: "Kaduwela Municipal Council",
        district_id: 1,
      },
      {
        name: "Moratuwa Municipal Council",
        district_id: 1,
      },
      {
        name: "Kollonnawa Urban Council",
        district_id: 1,
      },
      {
        name: "Seethawakapura Urban Council",
        district_id: 1,
      },
      {
        name: "Maharagama Urban Council",
        district_id: 1,
      },
      {
        name: "Kesbewa Urban Council",
        district_id: 1,
      },
      {
        name: "Boralesgamuwa Urban Council",
        district_id: 1,
      },
      {
        name: "Kotikawatta Mulleriyawa Pradeshiya Sabha",
        district_id: 1,
      },
      {
        name: "Seethawaka Pradeshiya Sabha",
        district_id: 1,
      },
      {
        name: "Homagama Pradeshiya Sabha",
        district_id: 1,
      },
    ];

    await queryInterface.bulkInsert("municipal_councils", councils);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("municipal_councils", null, {});
  },
};
