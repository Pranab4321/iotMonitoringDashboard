// import React, { useEffect, useState } from "react";
// import axios from "axios";

// function IoTMonitor() {
//   const [sensorData, setSensorData] = useState({ temperature: [], humidity: [] });
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchSensorData = async () => {
//       try {
//         const response = await axios.get("http://localhost:5000/api/sensors");
//         setSensorData(response.data);
//       } catch (err) {
//         console.error(err);
//         setError("Error fetching sensor data");
//       }
//     };

//     fetchSensorData();

//     // Optionally, fetch data every 5 seconds
//     const interval = setInterval(fetchSensorData, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div>
//       <h2>Live Sensor Data</h2>
//       {error ? (
//         <p style={{ color: "red" }}>{error}</p>
//       ) : (
//         <div>
//           <p>Temperature: {sensorData.temperature.join(", ")}°C</p>
//           <p>Humidity: {sensorData.humidity.join(", ")}%</p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default IoTMonitor;

//3333333333333
import React, { useState, useEffect } from 'react';

function IoTMonitor() {
  const [temperature, setTemperature] = useState('--');
  const [humidity, setHumidity] = useState('--');
  const [nitrogenLevel, setNitrogenLevel] = useState('--');
  const [soilMoisture, setSoilMoisture] = useState('--');

  useEffect(() => {
    const interval = setInterval(() => {
      setTemperature((20 + Math.random() * 10).toFixed(1));
      setHumidity((40 + Math.random() * 20).toFixed(1));
      setNitrogenLevel((50 + Math.random() * 50).toFixed(1));
      setSoilMoisture((50 + Math.random() * 50).toFixed(1));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="iot-monitor" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', padding: '2rem' }}>
      <div className="card" style={cardStyle}>
        <h3>Temperature</h3>
        <p>{temperature} &deg;C</p>
      </div>
      <div className="card" style={cardStyle}>
        <h3>Humidity</h3>
        <p>{humidity} %</p>
      </div>
      <div className="card" style={cardStyle}>
        <h3>Nitrogen Level</h3>
        <p>{nitrogenLevel} %</p>
      </div>
      <div className="card" style={cardStyle}>
        <h3>Soil Moisture</h3>
        <p>{soilMoisture} %</p>
      </div>
    </section>
  );
}

const cardStyle = {
  backgroundColor: 'white',
  border: '1px solid #ddd',
  borderRadius: '8px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  margin: '1rem',
  width: '300px',
  padding: '1.5rem',
  textAlign: 'center',
};

export default IoTMonitor;
