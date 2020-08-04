"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert(
      "tags",
      [
        {
          title: "this is a tag",

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "This is also a tag",

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "this might be a tag",

          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete("tags", null, {});
  },
};
