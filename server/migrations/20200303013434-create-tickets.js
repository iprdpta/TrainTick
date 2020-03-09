"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("tickets", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      train_name: {
        type: Sequelize.STRING
      },
      train_type: {
        type: Sequelize.INTEGER
      },
      depart: {
        type: Sequelize.STRING
      },
      depart_station: {
        type: Sequelize.STRING
      },
      start_date: {
        type: Sequelize.DATEONLY,
        get: function() {
          return moment(this.getDataValue("date_start")).format("YYYY-MM-DD");
        }
      },
      start_time: {
        type: Sequelize.TIME,
        get: function() {
          return moment(this.getDataValue("start_time")).format("h:mm");
        }
      },
      destination: {
        type: Sequelize.STRING
      },
      destination_station: {
        type: Sequelize.STRING
      },
      arrival_date: {
        type: Sequelize.DATEONLY,
        get: function() {
          return moment(this.getDataValue("arrival_date")).format("YYYY-MM-DD");
        }
      },
      arrival_time: {
        type: Sequelize.TIME,
        get: function() {
          return moment(this.getDataValue("arrival_time")).format("h:mm");
        }
      },
      date_time: {
        type: Sequelize.DATE,
        get: function() {
          return moment(this.getDataValue("date_time")).format(
            "YYYY-MM-DD h:mm"
          );
        }
      },
      price: {
        type: Sequelize.STRING
      },
      qty: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("tickets");
  }
};
