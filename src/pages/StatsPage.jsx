import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, ArcElement } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement); // Register Pie chart component

const StatsPage = () => {
  const dataBar = {
    labels: ['Users', 'Posts', 'Comments', 'Revenue', 'Completed Tasks', 'Active Projects'],
    datasets: [
      {
        label: 'Stats',
        data: [1000, 120, 320, 50000, 150, 7], // You can dynamically set this data based on your state
        backgroundColor: 'rgba(75, 192, 192, 0.4)',  // Lighter color for the bars
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const dataPie = {
    labels: ['Users', 'Posts', 'Comments', 'Completed Tasks'],
    datasets: [
      {
        label: 'Stats',
        data: [1000, 120, 320, 150],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
        borderColor: '#fff',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="p-6">
      <Helmet>
        <title>Dashboard Stats</title>
        <meta name="description" content="Dashboard stats and graphs" />
      </Helmet>

      <h1 className="text-3xl font-bold text-gray-800 mb-6">Dashboard Stats</h1>

      {/* Dashboard stats grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">

        {/* Small Bar Chart */}
        <div className="mb-6">
          <Bar 
            data={dataBar} 
            options={{ 
              responsive: true, 
              maintainAspectRatio: false, 
              plugins: { legend: { display: false } } 
            }} 
            height={150} 
          />
        </div>

        {/* Pie Chart */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold">Stats Distribution</h2>
          <Pie 
            data={dataPie} 
            options={{ responsive: true, plugins: { legend: { position: 'top' } } }} 
            height={150} 
          />
        </div>

      </div>

      <Link to="/dashboard" className="text-blue-500">Back to Dashboard</Link>
    </div>
  );
};

export default StatsPage;
