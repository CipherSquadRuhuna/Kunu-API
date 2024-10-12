"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const districts = [
      { name: "Ampara" },
      { name: "Anuradhapura" },
      { name: "Badulla" },
      { name: "Batticaloa" },
      { name: "Colombo" },
      { name: "Galle" },
      { name: "Gampaha" },
      { name: "Hambantota" },
      { name: "Jaffna" },
      { name: "Kalutara" },
      { name: "Kandy" },
      { name: "Kegalle" },
      { name: "Kilinochchi" },
      { name: "Kurunegala" },
      { name: "Mannar" },
      { name: "Matale" },
      { name: "Matara" },
      { name: "Moneragala" },
      { name: "Mullaitivu" },
      { name: "Nuwara Eliya" },
      { name: "Polonnaruwa" },
      { name: "Puttalam" },
      { name: "Ratnapura" },
      { name: "Trincomalee" },
      { name: "Vavuniya" },
    ];

    await queryInterface.bulkInsert("districts", districts);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("districts", null, {});
  },
};
