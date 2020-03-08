"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "trainclasses",
      [
        {
          name: "Executive",
          createdAt :new Date(),
          updatedAt: new Date()
        },
        {
          name: "Business",
          createdAt :new Date(),
          updatedAt: new Date()
        },
        {
          name: "Economy",
          createdAt :new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("trainclasses", null, {});
  }
};
