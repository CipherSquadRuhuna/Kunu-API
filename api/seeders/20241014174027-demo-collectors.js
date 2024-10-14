"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("collectors", [
      {
        name: "John Doe",
        contact: "+1234567890",
        waste_types: "Plastic, Paper",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Jane Smith",
        contact: "+0987654321",
        waste_types: "Metal, Glass",
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: "Alice Johnson",
        contact: "+1122334455",
        waste_types: "biological, battery",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Bob Brown",
        contact: "+2233445566",
        waste_types: "Plastic, Metal",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Charlie Davis",
        contact: "+3344556677",
        waste_types: "Paper, Glass",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Diana Evans",
        contact: "+4455667788",
        waste_types: "biological, Plastic",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Ethan Foster",
        contact: "+5566778899",
        waste_types: "battery, Metal",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Fiona Green",
        contact: "+6677889900",
        waste_types: "Glass, Paper",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "George Harris",
        contact: "+7788990011",
        waste_types: "Plastic, biological",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Hannah Irving",
        contact: "+8899001122",
        waste_types: "Metal, battery",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Ian Jackson",
        contact: "+9900112233",
        waste_types: "Glass, Plastic",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Julia King",
        contact: "+0011223344",
        waste_types: "Paper, biological",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // 3 cardboard collector
      {
        name: "Kurtis Lee",
        contact: "+1122334455",
        waste_types: "Cardboard",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Liam Martin",
        contact: "+2233445566",
        waste_types: "Cardboard",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Mia Nelson",
        contact: "+3344556677",
        waste_types: "Cardboard",
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      // 3 clothes collector
      {
        name: "Nora Oliver",
        contact: "+4455667788",
        waste_types: "Clothes",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Oscar Parker",
        contact: "+5566778899",
        waste_types: "Clothes",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Penny Quinn",
        contact: "+6677889900",
        waste_types: "Clothes",
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      // 3 shoes collector
      {
        name: "Quincy Roberts",
        contact: "+7788990011",
        waste_types: "Shoes",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Riley Smith",
        contact: "+8899001122",
        waste_types: "Shoes",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Sara Taylor",
        contact: "+9900112233",
        waste_types: "Shoes",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("collectors", null, {});
  },
};
