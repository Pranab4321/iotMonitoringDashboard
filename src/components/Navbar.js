import React from 'react';

function Navbar() {
  return (
    <nav style={{ backgroundColor: '#0056a4', color: 'white', padding: '0.5rem 1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div className="logo">IoT Dashboard</div>
      <div className="nav-links">
        <a href="#iot-monitor" style={{ color: 'white', textDecoration: 'none', margin: '0 1rem' }}>IoT Monitor</a>
        <a href="#sensor-chart" style={{ color: 'white', textDecoration: 'none', margin: '0 1rem' }}>Sensor Chart</a>
      </div>
    </nav>
  );
}

export default Navbar;

