import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import Link and useNavigate
import { FaUserEdit } from 'react-icons/fa';

const Navbar = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleLogout = () => {
    // Clear user session or authentication data if necessary
    // Navigate to login page
    navigate('/login');
  };

  return (
    <div className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-semibold">User Dashboard</h1>

      <div className="flex items-center gap-4">
        {/* Edit Profile Button */}
        <Link to="/profile" className="flex items-center gap-2 text-blue-500 hover:text-blue-700">
          <FaUserEdit className="text-lg" />
          <span className="text-gray-700 font-medium">Edit Profile</span>
        </Link>

        {/* Logout Button */}
        <button
          onClick={handleLogout} // Trigger logout function
          className="bg-red-600 text-white px-4 py-2 rounded"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
