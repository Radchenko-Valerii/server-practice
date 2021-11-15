'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('persons', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nickName: {
        type: Sequelize.STRING(128),
        field: 'nickname',
        allowNull: false
      },
      realName: {
        type: Sequelize.STRING(128),
        field: 'nickname',
        allowNull: false
      },
      originDescription: {
        type: Sequelize.STRING,
        field: 'origin_description',
        defaultValue: "no info"
      },
      catchPhrase: {
        type: Sequelize.STRING,
        field:'catch_phrase',
        defaultValue: "no info"
      },
      birthday: {
        type: Sequelize.DATEONLY
      },
      isMale: {
        type: Sequelize.BOOLEAN,
        field: "is_male"
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'created_at'
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'updated_at'
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('persons');
  }
};