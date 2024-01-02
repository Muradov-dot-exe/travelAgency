// app.js

const express = require("express");
const holidayController = require("./controllers/holidayController");
const locationController = require("./controllers/locationController");
const reservationController = require("./controllers/reservationController");
const { sequelize } = require("./models");

const app = express();

app.use(express.json());

const PORT = 8080;

app.use(holidayController);
app.use(locationController);
app.use(reservationController);

// Стартиране на сървъра след създаване на таблиците
sequelize
  .sync()
  .then(() => {
    return sequelize.sync();
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error syncing models:", error);
  });
