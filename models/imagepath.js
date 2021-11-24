'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ImagePath extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  ImagePath.init({
    path: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ImagePath',
    underscored: true,
    tableName: 'image_paths'
  });
  return ImagePath;
};