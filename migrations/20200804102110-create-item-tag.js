"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("itemTags", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      todoItemId: {
        type: Sequelize.INTEGER,
        references: {
          model: "todoItems",
          key: "id",
        },
      },
      tagId: {
        type: Sequelize.INTEGER,
        references: {
          model: "todoItems",
          key: "id",
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("itemTags");
  },
};
