'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    return queryInterface.createTable('fuentes', { 
      'id': {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,

      },
      'fuente': {
        type: Sequelize.STRING,
      },
      'link': {
        type: Sequelize.TEXT,
      },
      'css': {
        type: Sequelize.TEXT,
      },
      'status': {
        type: Sequelize.STRING,
      },
      'created_at': {
          "type": Sequelize.DATE,
          "allowNull": true,
      },
      'updated_at': {
          "type": Sequelize.DATE,
          "allowNull": true,
      },
      'deleted_at': {
          "type": Sequelize.DATE,
          "allowNull": true,
      }
    
    });

  },

  down: async (queryInterface, Sequelize) => {

     return queryInterface.dropTable('fuentes');

  }
};
