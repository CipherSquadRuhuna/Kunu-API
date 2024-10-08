"use strict";

const municipalCouncils = [
  { council_name: "Ampara Municipal Council", district_id: 1 },
  { council_name: "Anuradhapura Municipal Council", district_id: 2 },
  { council_name: "Badulla Municipal Council", district_id: 3 },
  { council_name: "Batticaloa Municipal Council", district_id: 4 },
  { council_name: "Galle Municipal Council", district_id: 5 },
  { council_name: "Gampaha Municipal Council", district_id: 6 },
  { council_name: "Hambantota Municipal Council", district_id: 7 },
  { council_name: "Jaffna Municipal Council", district_id: 8 },
  { council_name: "Kalutara Municipal Council", district_id: 9 },
  { council_name: "Kandy Municipal Council", district_id: 10 },
  // Add more councils as needed
];

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("MunicipalCouncils", municipalCouncils.map(council => ({
      council_name: council.council_name,
      district_id: council.district_id,
      createdAt: new Date(),
      updatedAt: new Date(),
    })), {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("MunicipalCouncils", null, {});
  }
};
