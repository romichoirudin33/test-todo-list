'use strict';

const Todo = require("../Models/Todo");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Activities', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      check: {
        type: Sequelize.BOOLEAN
      },
      // todoId: {
      //   type: Sequelize.DataTypes.INTEGER,
      // },
      todoId: // name of the key we're adding 
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'Todos', // name of Target model
          key: 'id', // key in Target model that we're referencing
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Activities');
  }
};