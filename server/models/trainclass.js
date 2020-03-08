'use strict';
module.exports = (sequelize, DataTypes) => {
  const trainclass = sequelize.define('trainclass', {
    name: DataTypes.STRING
  }, {});
  trainclass.associate = function(models) {
    // associations can be defined here
  };
  return trainclass;
};