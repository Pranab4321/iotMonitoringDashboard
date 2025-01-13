import React, { useState, useEffect } from 'react';

function IoTMonitor() {
  const [temperature, setTemperature] = useState(23.00);
  const [humidity, setHumidity] = useState(69.80);
  const [soilMoisture, setSoilMoisture] = useState(4095);
  const [tdsLevel, setTdsLevel] = useState(877.42);
  const [pressure, setPressure] = useState(1013.59);

  useEffect(() => {
    const interval = setInterval(() => {
      // Generate nearby values for each sensor reading
      setTemperature(prev => (parseFloat((Math.random() * 0.2 + prev - 0.1).toFixed(2))));
      setHumidity(prev => (parseFloat((Math.random() * 2 + prev - 1).toFixed(2))));
      setSoilMoisture(4095); // Static value for soil moisture
      setTdsLevel(prev => (parseFloat((Math.random() * 10 + prev - 5).toFixed(2))));
      setPressure(prev => (parseFloat((Math.random() * 0.02 + prev - 0.01).toFixed(2))));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="iot-monitor" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', padding: '2rem' }}>
      <div className="card" style={cardStyle}>
        <h3>Soil Moisture</h3>
        <p>{soilMoisture}</p>
      </div>
      <div className="card" style={cardStyle}>
        <h3>Humidity</h3>
        <p>{humidity.toFixed(2)} %</p>
      </div>
      <div className="card" style={cardStyle}>
        <h3>Temperature</h3>
        <p>{temperature.toFixed(2)} &deg;C</p>
      </div>
      <div className="card" style={cardStyle}>
        <h3>Pressure</h3>
        <p>{pressure.toFixed(2)} hPa</p>
      </div>
      <div className="card" style={cardStyle}>
        <h3>TDS Level</h3>
        <p>{tdsLevel.toFixed(2)} ppm</p>
      </div>
    </section>
  );
}

const cardStyle = {
  backgroundColor: 'white',
  border: '1px solid #ddd',
  borderRadius: '8px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  margin: '0.5rem',
  width: '250px',
  height: '150px',
  padding: '1rem',
  textAlign: 'center',
};

export default IoTMonitor;

