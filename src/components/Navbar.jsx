// src/components/Navbar/Navbar.jsx
import React from 'react';

const Navbar = () => {
  return (
    <div className="bg-gray-800 text-white flex justify-between items-center p-4">
      <div className="text-2xl font-bold">User Dashboard</div>
      <div className="flex items-center">
        <img src="https://via.placeholder.com/40" alt="Profile" className="w-10 h-10 rounded-full mr-4" />
        <span className="mr-4">John Doe</span>
        <button className="bg-red-600 text-white py-2 px-4 rounded">Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
