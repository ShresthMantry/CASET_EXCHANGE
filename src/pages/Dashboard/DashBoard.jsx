import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, PointElement, LinearScale, Title, Tooltip, Legend, Filler, CategoryScale } from 'chart.js';
import "./dashboard.css";

ChartJS.register(LineElement, PointElement, LinearScale, Title, Tooltip, Legend, Filler, CategoryScale);

const Dashboard = () => {
  const chartData = {
    labels: ['7 Sun', '8 Mon', '9 Sun', '10 Sun', '11 Sun', '12 Sun', '13 Sun'],
    datasets: [
      {
        label: 'Streak Sales',
        data: [150, 230, 180, 250, 200, 326, 310],
        fill: true,
        backgroundColor: '#1D1D23',
        borderColor: '#ff7700',
        borderWidth: 2,
        pointBackgroundColor: '#ff7700',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: '#ff7700',
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false, // Hide vertical grid lines
        },
        ticks: {
          color: '#D9D9D9', // X-axis text color
          font: {
            size: 10,
          },
        },
      },
      y: {
        grid: {
          display: false, // Hide horizontal grid lines
          borderColor: '#333', // Optional: color of y-axis border
          borderDash: [10, 5], // Optional: dashed border for y-axis
        },
        ticks: {
          color: '#D9D9D9', // Y-axis text color
          display: true,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: '#000',
        cornerRadius: 0,
        callbacks: {
          label: function (context) {
            return `₹${context.raw}`;
          },
        },
      },
    },
    elements: {
      line: {
        tension: 0.4, // curve
      },
    },
  };

  return (
    <div className="dashboard">
      <div className="stats-grid">
        <div className="stat-card purple">
          <h3>Total Users</h3>
          <p className="stat-value">2,345</p>
          <p className="stat-change">+16.4% from last week</p>
        </div>
        <div className="stat-card red">
          <h3>Total Impressions</h3>
          <p className="stat-value">2,345</p>
          <p className="stat-change">+16.4% from last week</p>
        </div>
        <div className="stat-card blue">
          <h3>Total Streaks</h3>
          <p className="stat-value">2,345</p>
          <p className="stat-change">+16.4% from last week</p>
        </div>
        <div className="stat-card orange">
          <h3>Total Revenue</h3>
          <p className="stat-value">$2,345</p>
          <p className="stat-change">+16.4% from last week</p>
        </div>
      </div>

      <div className="charts-grid">
        <div className="chart-card streak-sales">
          <h3>Streak Sales</h3>
          <div className="chart-container">
            <Line data={chartData} options={chartOptions} />
            <div className="chart-value">₹326.00</div>
          </div>
        </div>
        
      </div>

      <div className="transactions-card">
        <h3 style={{ color: "#D9D9D9" }}>Transactions</h3>
        <table>
          <thead>
            <tr>
              <th style={{ color: "#D9D9D9" }}>TnxID</th>
              <th style={{ color: "#D9D9D9" }}>Amount</th>
              <th style={{ color: "#D9D9D9" }}>Date</th>
              <th style={{ color: "#D9D9D9" }}>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Tnx00123</td>
              <td>$127.10</td>
              <td>25-07-2024</td>
              <td><span className="status credited">Credited</span></td>
            </tr>
            <tr>
              <td>Tnx00123</td>
              <td>$127.10</td>
              <td>25-07-2024</td>
              <td><span className="status pending">Pending</span></td>
            </tr>
            <tr>
              <td>Tnx00123</td>
              <td>$127.10</td>
              <td>25-07-2024</td>
              <td><span className="status on-hold">On Hold</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
