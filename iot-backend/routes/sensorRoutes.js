const express = require("express");
const router = express.Router();
const SensorData = require("../models/sensorData");

// Endpoint to fetch all sensor data
router.get("/", async (req, res) => {
  try {
    const data = await SensorData.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Endpoint to save new sensor data
router.post("/", async (req, res) => {
  const { temperature, humidity } = req.body;

  const newSensorData = new SensorData({
    temperature,
    humidity,
  });

  try {
    const savedData = await newSensorData.save();
    res.status(201).json(savedData);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
