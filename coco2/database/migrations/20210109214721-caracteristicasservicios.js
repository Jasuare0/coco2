'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    return queryInterface.createTable('caracteristicasservicios', { 
      'id': {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,

      },
      'caracteristica': {
        type: Sequelize.STRING,
      },
      'descripcion': {
        type: Sequelize.TEXT,
      },
      'imagen': {
        type: Sequelize.TEXT,
      },
      'servicio_id': {
        type: Sequelize.INTEGER,
      },
      'created_at': {
          "type": Sequelize.DATE,
          "allowNull": true,
      },
      'updated_at': {
          "type": Sequelize.DATE,
          "allowNull": true,
      }
    
    });

  },

  down: async (queryInterface, Sequelize) => {

     return queryInterface.dropTable('caracteristicasservicios');

  }
};
