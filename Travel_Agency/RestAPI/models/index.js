const Sequelize = require("sequelize");
const sequelize = require("../database");

const Holiday = require("./Holiday");
const Location = require("./Location");
const Reservation = require("./Reservation");

Location.hasMany(Holiday, { foreignKey: "locationId" });

const db = {
  Location,
  Holiday,
  Reservation,
  sequelize,
};

module.exports = db;
