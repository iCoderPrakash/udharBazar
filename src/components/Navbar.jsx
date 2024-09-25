import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-100 py-2 ">
      <div className="container mx-auto flex justify-end gap-5 pr-6 items-center">
        <ul className="flex space-x-4 text-gray-600">
          <li className="hover:text-gray-900 cursor-pointer">Nearest Branch Locator</li>
          <li className="hover:text-gray-900 cursor-pointer">Sales PD</li>
          <li className="hover:text-gray-900 cursor-pointer">Career</li>
          <li className="hover:text-gray-900 cursor-pointer animate-pulse">Channel Partner Register</li>
          <li className="hover:text-gray-900 cursor-pointer">Check Status</li>
          <li className="hover:text-gray-900 cursor-pointer">Log In</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
