'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.renameColumn('Users', 'email', 'emailcredentials' ,{
      type: Sequelize.STRING,
      
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.renameColumn('Users', 'emailcredentials','email');
  },
};
