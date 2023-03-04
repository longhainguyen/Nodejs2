'markdown strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MarkDown extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  MarkDown.init({
    doctorID: DataTypes.STRING,
    clinicID: DataTypes.STRING,
    specialtyid: DataTypes.STRING,
    contentHTML: DataTypes.STRING,
    contentMarkdown: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'markdown',
  });
  return MarkDown;
};