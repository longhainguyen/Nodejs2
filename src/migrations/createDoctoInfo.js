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
        type: Sequelize.INTEGER
      },
      priceId: {
        type: Sequelize.INTEGER
      },
      provinceId: {
        type: Sequelize.INTEGER
      },
      paymentId: {
        type: Sequelize.INTEGER
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