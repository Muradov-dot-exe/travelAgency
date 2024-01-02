const { DataTypes } = require("sequelize");
const sequelize = require("../database");
const Holiday = require("./Holiday");

const Reservation = sequelize.define("reservation", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  phoneNumber: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  contactName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  holidayId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

Reservation.belongsTo(Holiday, { foreignKey: "holidayId" });

module.exports = Reservation;
