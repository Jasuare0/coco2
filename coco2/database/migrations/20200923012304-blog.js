'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    return queryInterface.createTable('blog', { 
      'id': {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,

      },
      'titulo': {
        type: Sequelize.STRING,
      },
      'contenido': {
        type: Sequelize.TEXT,
      },
      'imagen': {
        type: Sequelize.TEXT,
      },
      'visualizaciones': {
        type: Sequelize.INTEGER,
      },
      'megusta': {
        type: Sequelize.INTEGER,
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

     return queryInterface.dropTable('blog');

  }
};
