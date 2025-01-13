import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';

function SensorChart() {
  const chartRefs = {
    temperature: useRef(null),
    humidity: useRef(null),
    soilQuality: useRef(null),
    tds: useRef(null),
    pressure: useRef(null),
  };

  const [chartData, setChartData] = useState({
    temperature: Array(10).fill(0),
    humidity: Array(10).fill(0),
    soilQuality: Array(10).fill(0),
    tds: Array(10).fill(0),
    pressure: Array(10).fill(0),
  });

  useEffect(() => {
    const chartInstances = {};

    Object.keys(chartRefs).forEach((sensor) => {
      const ctx = chartRefs[sensor].current.getContext('2d');
      chartInstances[sensor] = new Chart(ctx, {
        type: 'line',
        data: {
          labels: Array.from({ length: 10 }, (_, i) => `T-${i}`),
          datasets: [
            {
              label: sensor.charAt(0).toUpperCase() + sensor.slice(1),
              data: chartData[sensor],
              borderColor: getRandomColor(),
              backgroundColor: getRandomColor(0.2),
              fill: true,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: true,
          plugins: {
            legend: {
              position: 'top',
            },
          },
          scales: {
            x: {
              beginAtZero: true,
            },
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    });

    const interval = setInterval(() => {
      const newChartData = { ...chartData };

      Object.keys(chartData).forEach((sensor) => {
        newChartData[sensor].shift();
        newChartData[sensor].push(generateRandomData(sensor));
      });

      setChartData(newChartData);

      Object.keys(chartInstances).forEach((sensor) => {
        chartInstances[sensor].data.datasets[0].data = newChartData[sensor];
        chartInstances[sensor].update();
      });
    }, 3000);

    return () => {
      clearInterval(interval);
      Object.keys(chartInstances).forEach((sensor) => {
        chartInstances[sensor].destroy();
      });
    };
  }, [chartData]);

  const generateRandomData = (sensor) => {
    switch (sensor) {
      case 'temperature':
        return (20 + Math.random() * 10).toFixed(1);
      case 'humidity':
        return (40 + Math.random() * 20).toFixed(1);
      case 'soilQuality':
        return (30 + Math.random() * 30).toFixed(1);
      case 'tds':
        return (200 + Math.random() * 100).toFixed(1);
      case 'pressure':
        return (1000 + Math.random() * 500).toFixed(1);
      default:
        return 0;
    }
  };

  const getRandomColor = (opacity = 1) => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgba(${r},${g},${b},${opacity})`;
  };

  return (
    <section style={{ margin: '3rem auto', maxWidth: '1000px', padding: '20px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
      <div className="chart-box" style={{ width: 'calc(50% - 20px)', margin: '10px', textAlign: 'center', boxSizing: 'border-box' }}>
        <h3>Temperature (°C)</h3>
        <canvas ref={chartRefs.temperature} style={{ height: '180px', width: '100%' }}></canvas>
      </div>

      <div className="chart-box" style={{ width: 'calc(50% - 20px)', margin: '10px', textAlign: 'center', boxSizing: 'border-box' }}>
        <h3>Humidity (%)</h3>
        <canvas ref={chartRefs.humidity} style={{ height: '180px', width: '100%' }}></canvas>
      </div>

      <div className="chart-box" style={{ width: 'calc(50% - 20px)', margin: '10px', textAlign: 'center', boxSizing: 'border-box' }}>
        <h3>Soil Quality (%)</h3>
        <canvas ref={chartRefs.soilQuality} style={{ height: '180px', width: '100%' }}></canvas>
      </div>

      <div className="chart-box" style={{ width: 'calc(50% - 20px)', margin: '10px', textAlign: 'center', boxSizing: 'border-box' }}>
        <h3>TDS (ppm)</h3>
        <canvas ref={chartRefs.tds} style={{ height: '180px', width: '100%' }}></canvas>
      </div>

      <div className="chart-box" style={{ width: 'calc(50% - 20px)', margin: '10px', textAlign: 'center', boxSizing: 'border-box' }}>
        <h3>Pressure (hPa)</h3>
        <canvas ref={chartRefs.pressure} style={{ height: '180px', width: '100%' }}></canvas>
      </div>
    </section>
  );
}

export default SensorChart;

