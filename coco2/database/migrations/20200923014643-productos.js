'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    return queryInterface.createTable('productos', { 
      'id': {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,

      },
      'nombre': {
        type: Sequelize.STRING,
      },
      'descripcion': {
        type: Sequelize.TEXT,
      },
      'descripcion_larga': {
        type: Sequelize.TEXT,
      },
      'pagina_inicio': {
      type: Sequelize.STRING,
      },
      'precio': {
      type: Sequelize.STRING,
      },
      'preciocondescuento': {
      type: Sequelize.STRING,
      },
      'categoria_id': {
      type: Sequelize.INTEGER,
      },
      'marca_id': {
      type: Sequelize.INTEGER,
      },
      'subcategoria_id': {
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

     return queryInterface.dropTable('productos');

  }
};
