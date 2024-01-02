const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("travel_agency", "root", "pass123", {
  host: "localhost",
  port: 3306,
  dialect: "mysql",
  logging: console.log,
});

module.exports = sequelize;
