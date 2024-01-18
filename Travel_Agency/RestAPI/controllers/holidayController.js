// controllers/holidayController.js

const express = require("express");
const router = express.Router();
const { Holiday, Location } = require("../models");

// Get all holidays
router.get("/holidays", async (req, res) => {
  try {
    const holidays = await Holiday.findAll({ include: [Location] });
    res.json(holidays);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get one holiday by ID
router.get("/holidays/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const holiday = await Holiday.findByPk(id, { include: [Location] });
    if (holiday) {
      res.json(holiday);
    } else {
      res.status(404).json({ error: "Holiday not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/holidays", async (req, res) => {
  const { title, startDate, duration, price, freeSlots, location } = req.body;

  try {
    let locationId;

    if (location && typeof location === "number") {
      locationId = location;
    } else {
      const newLocation = await Location.create(location);
      locationId = newLocation.id;
    }

    const holiday = await Holiday.create({
      title,
      startDate,
      duration,
      price,
      freeSlots,
      locationId,
    });

    res.status(201).json(holiday);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Update a holiday by ID
router.put("/holidays/:id", async (req, res) => {
  // Тук би трябвало да получаваме id от FE за да изпълним put заявка , но endpoint-а в FE не изпраща id  (/holidays)
  const { id } = req.params;
  const { title, startDate, duration, price, freeSlots, locationId } = req.body;
  try {
    const holiday = await Holiday.findByPk(id);
    if (holiday) {
      holiday.title = title;
      holiday.startDate = startDate;
      holiday.duration = duration;
      holiday.price = price;
      holiday.freeSlots = freeSlots;
      holiday.locationId = locationId;
      await holiday.save();
      res.json(holiday);
    } else {
      res.status(404).json({ error: "Holiday not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete a holiday by ID
router.delete("/holidays/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const holiday = await Holiday.findByPk(id);
    if (holiday) {
      await holiday.destroy();
      res.json({ message: "Holiday deleted successfully" });
    } else {
      res.status(404).json({ error: "Holiday not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
