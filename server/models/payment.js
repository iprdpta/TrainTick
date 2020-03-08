"use strict";
module.exports = (sequelize, DataTypes) => {
  const payment = sequelize.define(
    "payment",
    {
      ticket_id: DataTypes.INTEGER,
      user_id: DataTypes.INTEGER,
      qty: DataTypes.INTEGER,
      qty_baby: DataTypes.INTEGER,
      adult_price: DataTypes.INTEGER,
      baby_price: DataTypes.INTEGER,
      total_price: DataTypes.INTEGER,
      status: DataTypes.ENUM("Pending", "Approved","Declined"),
      attachment: DataTypes.STRING
    },
    {}
  );
  payment.associate = function(models) {
    payment.belongsTo(models.users, {
      foreignKey: "user_id",
      as: "user"
    });
    payment.belongsTo(models.tickets, {
      foreignKey: "ticket_id",
      as: "ticket"
    });
  };
  return payment;
};
