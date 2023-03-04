'history strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('history', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      patientid: {
        type: Sequelize.STRING
      },
      doctorId: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      files: {
        type: Sequelize.STRING
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('history');
  }
};