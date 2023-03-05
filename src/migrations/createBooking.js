'booking strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('booking', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      statusId: {
        type: Sequelize.INTEGER
      },
      doctorId: {
        type: Sequelize.INTEGER
      },
      patientid: {
        type: Sequelize.INTEGER
      },
      date: {
        type: Sequelize.DATE
      },
      timeType: {
        type: Sequelize.STRING
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('booking');
  }
};