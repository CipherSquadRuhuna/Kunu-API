"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "service_complains",
      [
        {
          user_id: 1,
          municiple_councial_id: 101,
          complain: "Garbage not collected on time.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 2,
          municiple_councial_id: 102,
          complain: "Streetlights are not working.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("service_complains", null, {});
  },
};
