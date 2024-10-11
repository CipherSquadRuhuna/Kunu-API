"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("garbage_complains", [
      {
        user_id: 1,
        location: "123 Main St",
        remarks: "Overflowing garbage bin",
        attached_image: "image.jpg",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: 2,
        location: "456 Elm St",
        remarks: "Garbage not collected",
        attached_image: "image.jpg",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: 3,
        location: "789 Oak St",
        remarks: "Illegal dumping",
        attached_image: "image.jpg",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("garbage_complains", null, {});
  },
};
