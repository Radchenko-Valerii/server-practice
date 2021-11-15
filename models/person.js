'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Person extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Person.init({
    nickName: {
      type: DataTypes.STRING(128),
      field: 'nickname',
      allowNull: false,
      validate: {
        notNull: true,
        notEmpty: true,
      }
    },
    realName: {
      type: DataTypes.STRING(128),
      field: 'real_name',
      allowNull: false,
      validate: {
        notNull: true,
        notEmpty: true,
      }
    },
    originDescription: {
      type: DataTypes.STRING,
      field: 'origin_description'
    },
    catchPhrase: {
      type: DataTypes.STRING,
      field:'catch_phrase'},
    birthday: DataTypes.DATEONLY,
    isMale: {
      type: DataTypes.BOOLEAN,
      field: 'is_male'}
  }, {
    sequelize,
    modelName: 'Person',
    underscored: true,
    tableName: 'persons'
  });
  return Person;
};