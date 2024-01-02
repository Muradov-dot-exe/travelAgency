const express = require("express");
const router = express.Router();
const { Reservation, Holiday } = require("../models");

// Get all reservations
router.get("/reservations", async (req, res) => {
  try {
    const reservations = await Reservation.findAll();
    res.json(reservations);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get one reservation by ID
router.get("/reservations/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const reservation = await Reservation.findByPk(id, { include: [Holiday] });
    if (reservation) {
      res.json(reservation);
    } else {
      res.status(404).json({ error: "Reservation not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create a new reservation
router.post("/reservations", async (req, res) => {
  const { contactName, phoneNumber, holidayId } = req.body;
  try {
    const reservation = await Reservation.create({
      contactName,
      phoneNumber,
      holidayId,
    });
    res.status(201).json(reservation);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Update a reservation by ID
router.put("/reservations/:id", async (req, res) => {
  const { id } = req.params;
  const { contactName, phoneNumber, holidayId } = req.body;
  try {
    const reservation = await Reservation.findByPk(id);
    if (reservation) {
      reservation.contactName = contactName;
      reservation.phoneNumber = phoneNumber;
      reservation.holidayId = holidayId;
      await reservation.save();
      res.json(reservation);
    } else {
      res.status(404).json({ error: "Reservation not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete a reservation by ID
router.delete("/reservations/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const reservation = await Reservation.findByPk(id);
    if (reservation) {
      await reservation.destroy();
      res.json({ message: "Reservation deleted successfully" });
    } else {
      res.status(404).json({ error: "Reservation not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
