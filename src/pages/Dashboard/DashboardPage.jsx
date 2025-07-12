import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import Card from '../../components/Card';
import Modal from '../../components/Modal';
import Button from '../../components/Button';
import DashboardLayout from '../../layout/DashboardLayout';

const DashboardPage = () => {
  const [user, setUser] = useState({});
  const [stats, setStats] = useState({});
  const [recentActivity, setRecentActivity] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');
  const [profilePicture, setProfilePicture] = useState(null);

  useEffect(() => {
    // Simulate fetching user and stats data
    setUser({
      name: 'Dasuni',
      email: 'dasu23@example.com',
      profilePicture: 'https://via.placeholder.com/150', // Default image
    });
    setStats({
      totalUsers: 1000,
      posts: 120,
      comments: 320,
      revenue: 50000, // Adding more stats
      tasksCompleted: 150, // Example stat
      activeProjects: 7, // Example stat
    });
    setRecentActivity([
      { activity: 'calculate revenue', timestamp: '2 minutes ago' },
      { activity: 'Commented on a review', timestamp: '30 minutes ago' },
      { activity: 'Joined a new user', timestamp: '1 hour ago' },
    ]);
  }, []);

  const openModal = (content) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  return (
    <DashboardLayout>
      {/* Dynamic Title using Helmet */}
      <Helmet>
        <title>{user.name ? `${user.name}'s Dashboard` : 'User Dashboard'}</title>
        <meta name="description" content="User dashboard displaying stats and recent activity" />
      </Helmet>

      <div className="flex items-center mb-6">
        {/* Profile Picture and Welcome Message */}
        <div className="relative">
          <img
            src={profilePicture || user.profilePicture}
            alt="Profile"
            className="w-16 h-16 rounded-full mr-4 cursor-pointer"
            onClick={() => document.getElementById('profilePictureInput').click()} // Trigger input on image click
          />
          <input
            type="file"
            onChange={(e) => handleProfilePicChange(e)}
            className="hidden"
            id="profilePictureInput"
          />
        </div>
        <h1 className="text-3xl font-bold text-gray-800 ml-4">Welcome back, {user.name}!</h1>
      </div>

      {/* Dashboard Stats Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-6">
        <Card title="Total Users" content={stats.totalUsers} />
        <Card title="Posts" content={stats.posts} />
        <Card title="Comments" content={stats.comments} />
        <Card title="Revenue" content={`$${stats.revenue}`} />
        <Card title="Completed Tasks" content={stats.tasksCompleted} />
        <Card title="Active Projects" content={stats.activeProjects} />
      </div>

      {/* Recent Activity Section */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Recent Activity</h2>
        <ul className="bg-white p-4 rounded-lg shadow">
          {recentActivity.map((activity, index) => (
            <li key={index} className="py-2 border-b last:border-none">
              <strong>{activity.activity}</strong> - <span className="text-gray-600">{activity.timestamp}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Action Buttons */}
      <div className="flex space-x-4">
        <Button label="View All Stats" onClick={() => openModal('All Stats Info')} />
        <Button label="Manage Profile" onClick={() => openModal('Profile Management Info')} />
      </div>

      {/* Modal to Display Additional Information */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2 className="text-xl font-bold">Details: {modalContent}</h2>
        <p className="mt-4 text-gray-700">Here is more detailed information about {modalContent}...</p>
        <div className="mt-4">
          <Button label="Close" onClick={() => setIsModalOpen(false)} />
        </div>
      </Modal>
    </DashboardLayout>
  );
};

export default DashboardPage;
