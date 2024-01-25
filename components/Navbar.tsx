// src/components/Navbar.js
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-purple-500 to-indigo-500 p-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="text-white text-lg font-bold">O&G</div>
          <ul className="flex space-x-4">
            <li className="text-white">Home</li>
            <li className="text-white">About</li>
            <li className="text-white">Services</li>
            <li className="text-white">Contact</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
