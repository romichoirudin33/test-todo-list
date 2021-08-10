'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // return queryInterface.bulkInsert('Activities', [{
    //   name: 'Todo 1',
    //   check: true,
    //   todoId: 1,
    //   createdAt: new Date(),
    //   updatedAt: new Date()
    // }]);
    const todos = await queryInterface.sequelize.query(
      `SELECT id from Todos;`
    );
    const rows = todos[0];
    return await queryInterface.bulkInsert('Activities', [
      { name: 'activity1', check: true, todoId: rows[0].id },
      { name: 'activity2', check: true, todoId: rows[0].id }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Activities', null, {});
  }
};
