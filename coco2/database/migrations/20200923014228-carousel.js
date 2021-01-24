'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    return queryInterface.createTable('carousel', { 
      'id': {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,

      },
      'imagen': {
        type: Sequelize.TEXT,
      },
      'ubicacion': {
        type: Sequelize.STRING,
      }
    
    });

  },

  down: async (queryInterface, Sequelize) => {

     return queryInterface.dropTable('carousel');

  }
};
