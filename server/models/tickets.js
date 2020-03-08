"use strict";
module.exports = (sequelize, DataTypes) => {
  const tickets = sequelize.define(
    "tickets",
    {
      train_name: DataTypes.STRING,
      train_type: DataTypes.INTEGER,
      depart: DataTypes.STRING,
      depart_station: DataTypes.STRING,
      start_date: DataTypes.DATEONLY,
      start_time: DataTypes.TIME,
      destination: DataTypes.STRING,
      destination_station: DataTypes.STRING,
      arrival_date: DataTypes.DATEONLY,
      arrival_time: DataTypes.TIME,
      date_time: DataTypes.DATE,
      price: DataTypes.INTEGER,
      price_baby: DataTypes.INTEGER,
      qty: DataTypes.INTEGER
    },
    {}
  );
  tickets.associate = function(models) {
    tickets.belongsTo(models.trainclass, {
      foreignKey: "train_type",
      as: "traintype"
    });
  };
  return tickets;
};
