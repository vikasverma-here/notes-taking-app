import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar bg-gray-800 text-white p-4 shadow-md">
      <div className="container mx-auto flex gap-6 justify-center">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `px-4 py-2 rounded-lg hover:bg-gray-700 transition ${
              isActive ? 'bg-blue-500' : 'bg-gray-800'
            }`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/past"
          className={({ isActive }) =>
            `px-4 py-2 rounded-lg hover:bg-gray-700 transition ${
              isActive ? 'bg-blue-500' : 'bg-gray-800'
            }`
          }
        >
          Pastes
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
