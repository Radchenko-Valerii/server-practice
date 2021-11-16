'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SuperPower extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      SuperPower.belongsTo(models.Person, {
        foreignKey: 'personId'
      });
    }
  };
  SuperPower.init({
    power: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'SuperPower',
    underscored: true,
    tableName:'super_powers'
  });
  return SuperPower;
};