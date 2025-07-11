// src/pages/Dashboard/Dashboard.jsx
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Button from '../../components/Button';
import Card from '../../components/Card';
import Modal from '../../components/Modal';
// Reusable modal component


const Dashboard = () => {
  // Dummy JSON data
  const dummyData = {
    user: {
      name: 'John Doe',
      email: 'john.doe@example.com',
      profilePicture: 'https://via.placeholder.com/150'
    },
    stats: {
      totalUsers: 1000,
      posts: 120,
      comments: 320
    },
    recentActivity: [
      { activity: 'Liked a post', timestamp: '2 minutes ago' },
      { activity: 'Commented on a post', timestamp: '30 minutes ago' },
      { activity: 'Joined a new group', timestamp: '1 hour ago' }
    ]
  };

  const [user, setUser] = useState({});
  const [stats, setStats] = useState({});
  const [recentActivity, setRecentActivity] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');

  useEffect(() => {
    // Simulating data fetching (e.g., from an API)
    setUser(dummyData.user);
    setStats(dummyData.stats);
    setRecentActivity(dummyData.recentActivity);
  }, []);

  const openModal = (content) => {
    setModalContent(content);  // Set the content for the modal
    setIsModalOpen(true);  // Open the modal
  };

  const closeModal = () => {
    setIsModalOpen(false);  // Close the modal
  };

  return (
    <div className="p-6">
      <Helmet>
        <title>Dashboard - User Management</title>
        <meta name="description" content="User dashboard displaying stats and recent activity" />
      </Helmet>

      {/* Welcome Message */}
      <div className="flex items-center mb-6">
        <img
          src={user.profilePicture}
          alt="Profile"
          className="w-16 h-16 rounded-full mr-4"
        />
        <h1 className="text-3xl font-bold">Welcome back, {user.name}!</h1>
      </div>

      {/* User Stats Section */}
      <div className="grid grid-cols-3 gap-6 mb-6">
        <Card title="Total Users" content={stats.totalUsers} onClick={() => openModal('Total Users Info')} />
        <Card title="Posts" content={stats.posts} onClick={() => openModal('Posts Info')} />
        <Card title="Comments" content={stats.comments} onClick={() => openModal('Comments Info')} />
      </div>

      {/* Recent Activity Section */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Recent Activity</h2>
        <ul>
          {recentActivity.map((activity, index) => (
            <li key={index} className="mb-2">
              <span className="font-semibold">{activity.activity}</span> - <span className="text-gray-600">{activity.timestamp}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Action Buttons */}
      <div className="flex space-x-4">
        <Button label="View All Stats" onClick={() => openModal('All Stats Info')} />
        <Button label="Manage Profile" onClick={() => openModal('Profile Management Info')} />
      </div>

      {/* Modal to display additional information */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2 className="text-xl font-bold">Details: {modalContent}</h2>
        <p className="mt-4">Here is more detailed information about {modalContent}...</p>
        <Button label="Close" onClick={closeModal} />
      </Modal>
    </div>
  );
};

export default Dashboard;
