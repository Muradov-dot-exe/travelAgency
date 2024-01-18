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
    allowNull: true,
    defaultValue: "",
  },
  contactName: {
    type: DataTypes.STRING,
    allowNull: true,
    defaultValue: "",
  },
  holidayId: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: "",
  },
});

Reservation.belongsTo(Holiday, { foreignKey: "holidayId" });

module.exports = Reservation;
