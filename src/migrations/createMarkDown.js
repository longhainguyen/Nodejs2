'markdown strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('markdown', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      doctorID: {
        type: Sequelize.STRING
      },
      clinicID: {
        type: Sequelize.STRING
      },
      specialtyid: {
        type: Sequelize.STRING
      },
      contentHTML: {
        type: Sequelize.STRING
      },
      contentMarkdown: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('markdown');
  }
};