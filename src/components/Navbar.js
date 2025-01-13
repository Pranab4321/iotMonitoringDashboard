import React from 'react';

function Navbar() {
  return (

        <nav style={{ backgroundColor: '#0056a4', color: 'white', padding: '0.5rem 1rem',justifyContent:'space-between', display: 'flex', alignItems: 'center',position: 'fixed',width:'95.12vw' }}>
      <a href="#dashboard" style={{color: '#F1D3B2', textDecoration: 'none', fontSize:'20px', fontWeight:'bold'}}>IoT Dashboard</a>
      <div className="nav-links">
        <a href="#beforeIot" style={{ color: 'white',fontWeight:'bold', textDecoration: 'none', margin: '0 1rem' }}>IoT Monitor</a>
        <a href="#sensor-chart" style={{ color: 'white',fontWeight:'bold', textDecoration: 'none', margin: '0 1rem' }}>Sensor Chart</a>
      </div>
    </nav>
    
  );
}

export default Navbar;

