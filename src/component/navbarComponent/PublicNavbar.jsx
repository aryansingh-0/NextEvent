import React from "react";
import { NavLink } from "react-router-dom";

const PublicNavbar = () => {
  const navLinkStyles = ({ isActive }) =>
    isActive
      ? "text-white bg-blue-500 px-4 py-2 rounded-md"
      : "text-gray-700 hover:text-blue-500 px-4 py-2 rounded-md transition";

  return (
    <nav className="bg-white shadow-md p-4 sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        {/* Brand Logo */}
        <NavLink to="/" className="text-2xl font-extrabold text-blue-600">
          Event Portal
        </NavLink>

        {/* Navigation Links */}
        <ul className="flex space-x-6">
          <li>
            <NavLink to="/events" className={navLinkStyles}>
              Events
            </NavLink>
          </li>
          <li>
            <NavLink to="/login" className={navLinkStyles}>
              Login
            </NavLink>
          </li>
          <li>
            <NavLink to="/signup" className={navLinkStyles}>
              Sign Up
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default PublicNavbar;
