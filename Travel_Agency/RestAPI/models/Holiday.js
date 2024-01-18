const { DataTypes } = require("sequelize");
const sequelize = require("../database");
const Location = require("./Location");

const Holiday = sequelize.define("holiday", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  locationId: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: "",
  },
  title: {
    type: DataTypes.STRING,
    allowNull: true,
    defaultValue: "",
  },
  startDate: {
    type: DataTypes.DATEONLY,
    allowNull: true,
    defaultValue: "",
  },
  duration: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: "",
  },
  price: {
    type: DataTypes.DOUBLE,
    allowNull: true,
    defaultValue: "",
  },
  freeSlots: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: "",
  },
});

Holiday.belongsTo(Location, { foreignKey: "locationId" });

module.exports = Holiday;
