// controllers/locationController.js

const express = require("express");
const router = express.Router();
const { Location } = require("../models");

// Get all locations
router.get("/locations", async (req, res) => {
  try {
    const locations = await Location.findAll();
    res.json(locations);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get one location by ID
router.get("/locations/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const location = await Location.findByPk(id);
    if (location) {
      res.json(location);
    } else {
      res.status(404).json({ error: "Location not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create a new location
router.post("/locations", async (req, res) => {
  const { street, number, city, country, imageUrl } = req.body;
  try {
    const location = await Location.create({
      street,
      number,
      city,
      country,
      imageUrl,
    });
    console.log(location);

    res.status(201).json(location);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Update a location by ID
router.put("/locations/:id", async (req, res) => {
  const { id } = req.params;
  const { street, number, city, country, imageUrl } = req.body;
  try {
    const location = await Location.findByPk(id);
    if (location) {
      location.street = street;
      location.number = number;
      location.city = city;
      location.country = country;
      location.imageUrl = imageUrl;
      await location.save();
      res.json(location);
    } else {
      res.status(404).json({ error: "Location not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete a location by ID
router.delete("/locations/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const location = await Location.findByPk(id);
    if (location) {
      await location.destroy();
      res.json({ message: "Location deleted successfully" });
    } else {
      res.status(404).json({ error: "Location not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
