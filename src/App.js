import React from 'react';
import Navbar from './components/Navbar';
import IoTMonitor from './components/IoTMonitor';
import SensorChart from './components/SensorChart';
import './App.css';

function App() {
  return (
    <div className='m-page'>
      <Navbar />
      <div id="dashboard" style={{padding: '0.5rem 1rem',width:'95.1vw',height:"21px"}}></div>
      <header style={{ textAlign: 'center', padding: '1rem', backgroundColor: '#0078d7', color: 'white' }}>
        <h1>Welcome to the IoT Monitor Dashboard</h1>
      </header>
      <div id="beforeIot" style={{height:'25px'}}></div>
      <main>
        <IoTMonitor />
        <SensorChart />
      </main>
      <footer style={{ textAlign: 'center', padding: '1rem', backgroundColor: '#0078d7', color: 'white', position: 'fixed', bottom: 0, width: '95.1vw' }}>
        <p>&copy; 2025 IoT Dashboard</p>
      </footer>
    </div>
  );
}

export default App;

