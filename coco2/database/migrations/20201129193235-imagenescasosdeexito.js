'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {


    return queryInterface.createTable('imagenescasosdeexito', { 
      'id': {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,

      },
      'imagen': {
        type: Sequelize.TEXT,
      },
      'casodeexito_id': {
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

    return queryInterface.dropTable('imagenescasosdeexito');

  }
};
