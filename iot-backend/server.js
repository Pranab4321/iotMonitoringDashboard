const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

// Define a schema for sensor data
const sensorSchema = new mongoose.Schema({
  temperature: { type: Number, required: true },
  humidity: { type: Number, required: true },
  soilMoisture: { type: Number, required: true },
  pressure: { type: Number, required: true },
  tds: { type: Number, required: true },
  timestamp: { type: Date, default: Date.now },
});

// Create a model
const SensorData = mongoose.model("SensorData", sensorSchema);

// Route to get sensor data
app.get("/api/sensors", async (req, res) => {
  try {
    const data = await SensorData.find().sort({ timestamp: -1 }).limit(5); // Fetch the latest 5 records
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch sensor data" });
  }
});

// Route to post new sensor data
app.post("/api/sensors", async (req, res) => {
  const { temperature, humidity, soilMoisture, pressure, tds } = req.body;

  if (temperature == null || humidity == null || soilMoisture == null || pressure == null || tds == null) {
    return res.status(400).json({ error: "All sensor fields are required" });
  }

  try {
    const newSensorData = new SensorData({ temperature, humidity, soilMoisture, pressure, tds });
    await newSensorData.save();
    res.json({ message: "Sensor data saved successfully", data: newSensorData });
  } catch (err) {
    res.status(500).json({ error: "Failed to save sensor data" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
