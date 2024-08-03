import React from 'react';
import { Bar, Pie, Line } from 'react-chartjs-2';
import { Chart as ChartJS, registerables, Title, Tooltip, Legend } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels'; // Import DataLabels plugin
import './Useranalytics.css'; // Import the CSS file

// Register necessary Chart.js components
ChartJS.register(...registerables, Title, Tooltip, Legend, ChartDataLabels);

const UserAnalytics = () => {
  // Sample data (replace with actual data from your backend)
  const totalUsers = 10000;
  const badgeUsers = 5000;
  const purchaseData = {
    once: 3000,
    twice: 1500,
    thrice: 750,
    beyond: 250,
  };

  const badgeTypes = {
    bronze: 2500,
    silver: 1500,
    gold: 750,
  };

  const weeklyTotalUsers = [9300, 9500, 9700, 9850, 10000];
  const weeklyBadgedUsers = [4600, 4750, 4850, 4950, 5000];

  const purchaseChartData = {
    labels: ['Once', 'Twice', 'Thrice', 'Beyond'],
    datasets: [
      {
        label: 'Number of Users',
        data: [purchaseData.once, purchaseData.twice, purchaseData.thrice, purchaseData.beyond],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
        datalabels: {
          display: false, // Hide data labels
        },
      },
    ],
  };

  const userGrowthData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Total Users',
        data: [8000, 8500, 9000, 9300, 9700, 10000],
        borderColor: '#ed6f2e',
        fill: false,
        datalabels: {
          display: false, // Hide data labels
        },
      },
    ],
  };

  const weeklyTotalUsersData = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
    datasets: [
      {
        label: 'Total Users',
        data: weeklyTotalUsers,
        backgroundColor: '#ed6f2e',
        datalabels: {
          display: false, // Hide data labels
        },
      },
    ],
  };

  const weeklyBadgedUsersData = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
    datasets: [
      {
        label: 'Badged Users',
        data: weeklyBadgedUsers,
        backgroundColor: '#ed6f2e',
        datalabels: {
          display: false, // Hide data labels
        },
      },
    ],
  };

  const badgeTypeData = {
    labels: Object.keys(badgeTypes),
    datasets: [
      {
        data: Object.values(badgeTypes),
        backgroundColor: ['#CD7F32', '#C0C0C0', '#FFD700'],
        datalabels: {
          display: false, // Hide data labels
        },
      },
    ],
  };

  const chartOptions = {
    plugins: {
      legend: {
        labels: {
          color: '#ffffff', // Change legend text color to white
        },
      },
    },
    scales: {
      x: {
        display: true,
        ticks: {
          display: true,
          color: '#ffffff', // Sets x-axis tick labels to white
        },
        grid: {
          display: true,
        },
      },
      y: {
        display: true,
        ticks: {
          display: true,
          color: '#ffffff', // Sets y-axis tick labels to white
        },
        grid: {
          display: true,
        },
      },
    },
  };

  return (
    <div className="user-analytics-container">
      <div className="user-analytics-grid">
        <div className="user-analytics-card">
          <h2>Total Users</h2>
          <p className="user-analytics-big-number">{totalUsers.toLocaleString()}</p>
        </div>
        <div className="user-analytics-card">
          <h2>Badge Users</h2>
          <p className="user-analytics-big-number">{badgeUsers.toLocaleString()}</p>
        </div>
        <div className="user-analytics-card">
          <h2>Purchase Frequency</h2>
          <div className="user-analytics-chart-container">
            <Pie data={purchaseChartData} />
          </div>
        </div>
        <div className="user-analytics-card">
          <h2>User Growth</h2>
          <div className="user-analytics-chart-container">
            <Line data={userGrowthData} options={chartOptions} />
          </div>
        </div>
        <div className="user-analytics-card">
          <h2>Weekly Total Users</h2>
          <div className="user-analytics-chart-container">
            <Bar data={weeklyTotalUsersData} options={chartOptions} />
          </div>
        </div>
        <div className="user-analytics-card">
          <h2>Weekly Badged Users</h2>
          <div className="user-analytics-chart-container">
            <Bar data={weeklyBadgedUsersData} options={chartOptions} />
          </div>
        </div>
        <div className="user-analytics-card">
          <h2>Badge Type Distribution</h2>
          <div className="user-analytics-chart-container">
            <Pie data={badgeTypeData} />
          </div>
        </div>
        <div className="user-analytics-card user-analytics-premium-feature">
          <h2>User Demographics</h2>
          <p>Unlock this premium feature to view detailed user demographics.</p>
          <button className="user-analytics-unlock-button">Unlock Premium</button>
        </div>
      </div>
    </div>
  );
};

export default UserAnalytics;
