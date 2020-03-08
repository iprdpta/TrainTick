'use strict';
module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
    id_card: DataTypes.STRING,
    name: DataTypes.STRING,
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    gender: DataTypes.ENUM('Male', 'Female'),
    phone: DataTypes.STRING,
    address: DataTypes.STRING,
    profile_pic: DataTypes.STRING,
    level: DataTypes.ENUM('User', 'Admin')
  }, {});
  users.associate = function(models) {
    // associations can be defined here
  };
  return users;
};