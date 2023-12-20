// models.js

const { DataTypes } = require('sequelize');
const sequelize = require('./config');

const Data = sequelize.define('Data', {
  weight: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  height: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  gender: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = Data;
