'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {


    return queryInterface.createTable('casosdeexito', { 
      'id': {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,

      },
      'titulo': {
        type: Sequelize.STRING,
      },
      'descripcion': {
        type: Sequelize.TEXT,
      }
    
    });


  },

  down: async (queryInterface, Sequelize) => {

    return queryInterface.dropTable('casosdeexito');

  }
};
