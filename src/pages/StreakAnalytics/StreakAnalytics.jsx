import React from 'react';
import { Bar, Line } from 'react-chartjs-2';
import { Chart as ChartJS, registerables } from 'chart.js';
import './Streakanalytics.css';

ChartJS.register(...registerables);

const StreakAnalytics = () => {
  // Sample data (replace with actual data from your backend)
  const streaksListed = 1200;
  const streaksSold = 800;
  const avgHoldTime = 5.5; // in days
  const revenueFromStreaks = 15000; // in currency units

  const streaksSoldData = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
    datasets: [
      {
        label: 'Streaks Sold',
        data: [150, 200, 180, 220, 250],
        backgroundColor: '#ed6f2e',
      },
    ],
  };

  const avgHoldTimeData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Avg Hold Time (Days)',
        data: [5.0, 5.2, 5.1, 5.3, 5.5, 5.5],
        borderColor: '#ed6f2e',
        fill: false,
      },
    ],
  };

  const revenueData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Revenue (Units)',
        data: [2000, 2500, 3000, 3500, 4000, 15000],
        backgroundColor: '#ed6f2e',
      },
    ],
  };

  // Chart options to hide data labels, legends, and tooltips
  const options = {
    plugins: {
      legend: {
        display: false, // Hides the legend
      },
      tooltip: {
        enabled: false, // Hides tooltips
      },
      datalabels: {
        display: false, // Hides data labels (if using chartjs-plugin-datalabels)
      },
    },
    scales: {
      x: {
        display: true, // Shows x-axis markings
        ticks: {
          display: true, // Shows x-axis tick labels
          color: '#d9d9d9', // Sets x-axis tick labels to white
        },
        grid: {
          display: true, // Shows x-axis grid lines
        },
      },
      y: {
        display: true, // Shows y-axis markings
        ticks: {
          display: true, // Shows y-axis tick labels
          color: '#d9d9d9', // Sets y-axis tick labels to white
        },
        grid: {
          display: true, // Shows y-axis grid lines
        },
      },
    },
  };

  return (
    <div className="streak-container">
      <div className="streak-stats">
        <div className="streak-stat-card cpurple">
          <h2>Streaks Listed</h2>
          <p className="streak-stat-number">{streaksListed.toLocaleString()}</p>
        </div>
        <div className="streak-stat-card cred">
          <h2>Streaks Sold</h2>
          <p className="streak-stat-number">{streaksSold.toLocaleString()}</p>
        </div>
        <div className="streak-stat-card cblue">
          <h2>Avg Hold Time (Days)</h2>
          <p className="streak-stat-number">{avgHoldTime}</p>
        </div>
        <div className="streak-stat-card cyellow">
          <h2>Revenue from Streaks</h2>
          <p className="streak-stat-number">${revenueFromStreaks.toLocaleString()}</p>
        </div>
      </div>
      <div className="streak-grid">
        <div className="streak-card">
          <h2>Streaks Sold</h2>
          <div className="streak-chart-container">
            <Bar data={streaksSoldData} options={options} />
          </div>
        </div>
        <div className="streak-card">
          <h2>Average Hold Time</h2>
          <div className="streak-chart-container">
            <Line data={avgHoldTimeData} options={options} />
          </div>
        </div>
        <div className="streak-card">
          <h2>Revenue from Streaks</h2>
          <div className="streak-chart-container">
            <Bar data={revenueData} options={options} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StreakAnalytics;
