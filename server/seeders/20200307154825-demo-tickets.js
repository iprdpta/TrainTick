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
          qty: 100,
          createdAt :new Date(),
          updatedAt: new Date()
        },
        {
          train_name: "Hogwarts Express",
          train_type: 3,
          depart: "Jakarta",
          depart_station: "Station Manggarai",
          start_date: new Date(),
          start_time: new Date(),
          destination: "Hogwarts",
          destination_station: "Hogwarts Station",
          arrival_date: new Date(),
          arrival_time: new Date(),
          date_time: new Date(),
          price: 500000,
          qty: 100,
          createdAt :new Date(),
          updatedAt: new Date()
        },
        {
          train_name: "Hogwarts Express",
          train_type: 3,
          depart: "Hogwarts",
          depart_station: "Hogwarts Station",
          start_date: new Date(),
          start_time: new Date(),
          destination: "Jakarta",
          destination_station: "Jakarta Station",
          arrival_date: new Date(),
          arrival_time: new Date(),
          date_time: new Date(),
          price: 500000,
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
