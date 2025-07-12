import React from 'react';
import { Link } from 'react-router-dom';
import { FaTachometerAlt, FaUser, FaCog } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="bg-purple-700 text-white w-64 h-screen p-6 fixed top-0 left-0 flex flex-col">
      <h2 className="text-2xl font-bold mb-10">INFINITY OS</h2>
      <nav className="flex-1">
        <ul className="space-y-4">
          <li>
            <Link to="/dashboard" className="flex items-center gap-2 hover:text-gray-300">
              <FaTachometerAlt /> Dashboard
            </Link>
          </li>
          <li>
            <Link to="/profile" className="flex items-center gap-2 hover:text-gray-300">
              <FaUser /> Profile
            </Link>
          </li>
          <li>
            <Link to="/settings" className="flex items-center gap-2 hover:text-gray-300">
              <FaCog /> Settings
            </Link>
          </li>
        </ul>
      </nav>
      <button className="bg-red-500 py-2 px-4 rounded mt-auto">Logout</button>
    </div>
  );
};

export default Sidebar;