'use strict';
module.exports = (sequelize, DataTypes) => {
  const user_tickets = sequelize.define('user_tickets', {
    ticket_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    qty: DataTypes.INTEGER
  }, {});
  user_tickets.associate = function(models) {
    user_tickets.belongsTo(models.tickets, {
      foreignKey: "ticket_id",
      as: "ticket"
    });
    user_tickets.belongsTo(models.users, {
      foreignKey: "user_id",
      as: "user"
    });
  };
  return user_tickets;
};