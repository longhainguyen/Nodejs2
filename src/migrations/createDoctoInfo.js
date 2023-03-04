'doctoInfo strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('doctorInfo', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      doctorId: {
        type: Sequelize.STRING
      },
      priceId: {
        type: Sequelize.STRING
      },
      provinceId: {
        type: Sequelize.STRING
      },
      paymentId: {
        type: Sequelize.STRING
      },
      addressClinic: {
        type: Sequelize.STRING
      },
      nameClinic: {
        type: Sequelize.STRING
      },
      note: {
        type: Sequelize.STRING
      },
      count: {
        type: Sequelize.INTEGER
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('doctorinfo');
  }
};