const { DataTypes } = require("sequelize");
const sequelize = require("../database");

const Location = sequelize.define("location", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  street: {
    type: DataTypes.STRING,
    allowNull: true,
    defaultValue: "",
  },
  number: {
    type: DataTypes.STRING,
    allowNull: true,
    defaultValue: "",
  },
  city: {
    type: DataTypes.STRING,
    allowNull: true,
    defaultValue: "",
  },
  country: {
    type: DataTypes.STRING,
    allowNull: true,
    defaultValue: "",
  },
  imageUrl: {
    type: DataTypes.STRING,
    allowNull: true,
    defaultValue: "",
  },
});

module.exports = Location;
