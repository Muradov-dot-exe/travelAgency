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
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  startDate: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  duration: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  price: {
    type: DataTypes.DOUBLE,
    allowNull: false,
  },
  freeSlots: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

Holiday.belongsTo(Location, { foreignKey: "locationId" });

module.exports = Holiday;
