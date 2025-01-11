// import React from 'react';

// const SensorChart = () => {
//   return (
//     <div>
//       <h3>Sensor Chart</h3>
//     </div>
//   );
// };

// export default SensorChart;
import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

function SensorChart() {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');
    const sensorChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: Array.from({ length: 10 }, (_, i) => `T-${i}`),
        datasets: [
          {
            label: 'Temperature (°C)',
            data: Array(10).fill(0),
            borderColor: 'rgba(255, 99, 132, 1)',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            fill: true,
          },
          {
            label: 'Humidity (%)',
            data: Array(10).fill(0),
            borderColor: 'rgba(54, 162, 235, 1)',
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            fill: true,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
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

    const interval = setInterval(() => {
      sensorChart.data.datasets[0].data.shift();
      sensorChart.data.datasets[0].data.push((20 + Math.random() * 10).toFixed(1));
      sensorChart.data.datasets[1].data.shift();
      sensorChart.data.datasets[1].data.push((40 + Math.random() * 20).toFixed(1));
      sensorChart.update();
    }, 2000);

    return () => {
      clearInterval(interval);
      sensorChart.destroy();
    };
  }, []);

  return (
    <section id="sensor-chart" style={{ margin: '2rem auto', width: '90%', maxWidth: '800px', textAlign: 'center' }}>
      <h2>Sensor Data Chart</h2>
      <canvas ref={chartRef}></canvas>
    </section>
  );
}

export default SensorChart;
