import React from 'react';
import { Pie, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, registerables } from 'chart.js';
import './Badgeanalytics.css';

ChartJS.register(...registerables);

const BadgeAnalytics = () => {
  const badgeData = {
    gold: { sold: 1200, revenue: 6000 },
    silver: { sold: 1800, revenue: 5400 },
    diamond: { sold: 500, revenue: 10000 },
  };

  const totalBadgesSold = badgeData.gold.sold + badgeData.silver.sold + badgeData.diamond.sold;
  const totalRevenue = badgeData.gold.revenue + badgeData.silver.revenue + badgeData.diamond.revenue;

  const badgeDistributionData = {
    labels: ['Gold', 'Silver', 'Bronze'],
    datasets: [
      {
        data: [badgeData.gold.sold, badgeData.silver.sold, badgeData.diamond.sold],
        backgroundColor: ['#ffbf00', '#e6e6e6', '#E4953C'],
      },
    ],
  };

  const badgeRevenueData = {
    labels: ['Gold', 'Silver', 'Bronze'],
    datasets: [
      {
        label: 'Revenue ($)',
        data: [badgeData.gold.revenue, badgeData.silver.revenue, badgeData.diamond.revenue],
        backgroundColor: ['#ffbf00', '#e6e6e6', '#E4953C'],
      },
    ],
  };

  const pieOptions = {
    plugins: {
      legend: {
        labels: {
          color: '#ffffff', // Change legend text color to white
        },
      },
    },
  };

  const barOptions = {
    plugins: {
      legend: {
        display: false, // Hides the legend
      },
      tooltip: {
        enabled: false, // Hides tooltips
      },
    },
    scales: {
      x: {
        display: true, // Shows x-axis markings
        ticks: {
          display: true, // Shows x-axis tick labels
          color: '#ffffff', // Sets x-axis tick labels to white
        },
        grid: {
          display: true, // Shows x-axis grid lines
        },
      },
      y: {
        display: true, // Shows y-axis markings
        ticks: {
          display: true, // Shows y-axis tick labels
          color: '#ffffff', // Sets y-axis tick labels to white
        },
        grid: {
          display: true, // Shows y-axis grid lines
        },
      },
    },
  };

  return (
    <div className="badge-analytics-container">
      <div className="stats">
        <div className="stat-card1">
          <h2>Total Badges Sold</h2>
          <p className="stat-number">{totalBadgesSold.toLocaleString()}</p>
        </div>
        <div className="stat-card2">
          <h2>Total Revenue</h2>
          <p className="stat-number">${totalRevenue.toLocaleString()}</p>
        </div>
      </div>
      <div className="grid">
        <div className="card">
          <h2>Badges Sold</h2>
          <div className="chart-container">
            <Pie data={badgeDistributionData} options={pieOptions} />
          </div>
        </div>
        <div className="card">
          <h2>Revenue from Badges</h2>
          <div className="chart-container">
            <Bar data={badgeRevenueData} options={barOptions} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BadgeAnalytics;
