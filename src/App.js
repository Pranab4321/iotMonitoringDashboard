// import React, { useEffect, useState } from "react";
// import Navbar from "./components/Navbar";
// import IoTMonitor from "./components/IoTMonitor";
// import SensorChart from "./components/SensorChart";
// import axios from "axios";
// import "./App.css";

// function App() {
//   const [temperatureData, setTemperatureData] = useState([]);
//   const [humidityData, setHumidityData] = useState([]);

//   useEffect(() => {
//     const fetchSensorData = async () => {
//       try {
//         const response = await axios.get("http://localhost:5000/api/sensors");
//         setTemperatureData(response.data.temperature);
//         setHumidityData(response.data.humidity);
//       } catch (error) {
//         console.error("Error fetching sensor data:", error);
//       }
//     };

//     fetchSensorData();

//     // Fetch data every 5 seconds (optional)
//     const interval = setInterval(fetchSensorData, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="App">
//       <Navbar />
//       <div className="main-content">
//         <IoTMonitor />
//         <h2>Sensor Data Trends</h2>
//         <SensorChart data={temperatureData} label="Temperature (°C)" color="rgba(255, 99, 132, 1)" />
//         <SensorChart data={humidityData} label="Humidity (%)" color="rgba(54, 162, 235, 1)" />
//       </div>
//     </div>
//   );
// }

// export default App;
import React from 'react';
import Navbar from './components/Navbar';
import IoTMonitor from './components/IoTMonitor';
import SensorChart from './components/SensorChart';

function App() {
  return (
    <div>
      <Navbar />
      <header style={{ textAlign: 'center', padding: '1rem', backgroundColor: '#0078d7', color: 'white' }}>
        <h1>Welcome to the IoT Monitor Dashboard</h1>
      </header>
      <main>
        <IoTMonitor />
        <SensorChart />
      </main>
      <footer style={{ textAlign: 'center', padding: '1rem', backgroundColor: '#0078d7', color: 'white', position: 'fixed', bottom: 0, width: '100%' }}>
        <p>&copy; 2025 IoT Dashboard</p>
      </footer>
    </div>
  );
}

export default App;

