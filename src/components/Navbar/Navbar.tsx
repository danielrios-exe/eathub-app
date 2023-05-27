import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const roleId = localStorage.getItem('roleId');
  const activeStyle = 'underline underline-offset-4';

  return (
    <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-2 px-4 text-sm font-sans">
      <ul className="flex items-center gap-5">
        <li className="font-bold text-xl font-sans">
          <NavLink to="/home">eathub</NavLink>
        </li>
        <li>
          <NavLink
            to="/home"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/restaurants"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Restaurants
          </NavLink>
        </li>
      </ul>
      <ul className="flex items-center gap-3">
        {roleId === '3' ? (
          <li>
            <NavLink
              to="/profile"
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Profile
            </NavLink>
          </li>
        ) : null}
        <li>
          <NavLink
            to="/logout"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Logout
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
