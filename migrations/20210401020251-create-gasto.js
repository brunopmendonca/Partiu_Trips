'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Gastos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      lista: {
        type: Sequelize.STRING
      },
      viagemId: {
        type: Sequelize.INTEGER,
        // references: {
        //   model: "viagens",
        //   key: "id"
        // },
        // onUpdate: "cascade",
        // onDelete: "cascade"
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE

      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      gastos: {
        allowNull: false,
        type: Sequelize.STRING
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Gastos');
  }
};