'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Viagems', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ida: {
        type: Sequelize.STRING
      },
      volta: {
        type: Sequelize.STRING
      },
      lugar: {
        type: Sequelize.STRING
      },
      userId: {
        type: Sequelize.INTEGER,
        // references: {
        //   model: "users",
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
      imagem: {
        type: Sequelize.STRING
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Viagems');
  }
};