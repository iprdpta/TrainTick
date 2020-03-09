"use strict";
module.exports = (sequelize, DataTypes) => {
  const payment = sequelize.define(
    "payment",
    {
      ticket_id: DataTypes.INTEGER,
      user_id: DataTypes.INTEGER,
      qty: DataTypes.INTEGER,
      total_price: DataTypes.STRING,
      status: DataTypes.ENUM(
        "Waiting Payment",
        "Pending",
        "Approved",
        "Declined"
      ),
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
