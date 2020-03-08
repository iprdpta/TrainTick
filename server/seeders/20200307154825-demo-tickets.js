"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "tickets",
      [
        {
          train_name: "Argo Wilis",
          train_type: 1,
          depart: "Jakarta",
          depart_station: "Station Manggarai",
          start_date: new Date(),
          start_time: new Date(),
          destination: "Surabaya",
          destination_station: "Station Surabaya Pasarturi",
          arrival_date: new Date(),
          arrival_time: new Date(),
          date_time: new Date(),
          price: 300000,
          price_baby: 100000,
          qty: 100,
          createdAt :new Date(),
          updatedAt: new Date()
        },
        {
          train_name: "Argo Wilis",
          train_type: 2,
          depart: "Jakarta",
          depart_station: "Station Manggarai",
          start_date: new Date(),
          start_time: new Date(),
          destination: "Surabaya",
          destination_station: "Station Surabaya Pasarturi",
          arrival_date: new Date(),
          arrival_time: new Date(),
          date_time: new Date(),
          price: 250000,
          price_baby: 100000,
          qty: 100,
          createdAt :new Date(),
          updatedAt: new Date()
        },
        {
          train_name: "Argo Wilis",
          train_type: 3,
          depart: "Jakarta",
          depart_station: "Station Manggarai",
          start_date: new Date(),
          start_time: new Date(),
          destination: "Surabaya",
          destination_station: "Station Surabaya Pasarturi",
          arrival_date: new Date(),
          arrival_time: new Date(),
          date_time: new Date(),
          price: 200000,
          price_baby: 50000,
          qty: 100,
          createdAt :new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("tickets", null, {});
  }
};
