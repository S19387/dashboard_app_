// src/components/Sidebar/Sidebar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white w-64 h-screen p-4 fixed top-0 left-0">
      <ul>
        <li className="mb-4"><Link to="/dashboard" className="hover:text-gray-400">Dashboard</Link></li>
        <li className="mb-4"><Link to="/profile" className="hover:text-gray-400">Profile</Link></li>
        <li className="mb-4"><Link to="/settings" className="hover:text-gray-400">Settings</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
