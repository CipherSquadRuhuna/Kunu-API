'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('districts', [
      { id: 1, name: 'Colombo' },
      { id: 2, name: 'Gampaha' },
      { id: 3, name: 'Kalutara' },
      { id: 4, name: 'Kandy' },
      { id: 5, name: 'Matale' },
      { id: 6, name: 'Nuwara Eliya' },
      { id: 7, name: 'Galle' },
      { id: 8, name: 'Hambantota' },
      { id: 9, name: 'Matara' },
      { id: 10, name: 'Jaffna' },
      { id: 11, name: 'Kilinochchi' },
      { id: 12, name: 'Mannar' },
      { id: 13, name: 'Vavuniya' },
      { id: 14, name: 'Batticaloa' },
      { id: 15, name: 'Ampara' },
      { id: 16, name: 'Trincomalee' },
      { id: 17, name: 'Polonnaruwa' },
      { id: 18, name: 'Anuradhapura' },
      { id: 19, name: 'Kegalle' },
      { id: 20, name: 'Ratnapura' },
      { id: 21, name: 'Monaragala' },
      { id: 22, name: 'Badulla' },
      { id: 23, name: 'Sabaragamuwa' },
      { id: 24, name: 'Uva' },
      { id: 25, name: 'North Central' }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('districts', null, {});
  },
};
