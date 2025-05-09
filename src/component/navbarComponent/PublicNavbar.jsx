import React from "react";
import { NavLink } from "react-router-dom";

const PublicNavbar = () => {
  const navLinkStyles = ({ isActive }) =>
    isActive
      ? "text-white bg-blue-500 px-4 py-2 rounded-md"
      : "text-blue-700 font-bold hover:text-blue-500 px-4 py-2 rounded-md transition";

  return (
    <nav className="bg-black/10 backdrop-blur-lg shadow-lg border border-white/20 p-4 sticky top-0 z-10 rounded-xl">

      <div className="container mx-auto flex justify-between items-center">
        {/* Brand Logo */}
        <NavLink
          to="/NextEvent/"
          className="text-2xl font-extrabold text-blue-600"
        >
          Next Event
        </NavLink>

        {/* Navigation Links */}
        <ul className="flex space-x-6">
          <li>
            <NavLink to="/NextEvent/events" className={navLinkStyles}>
              Events
            </NavLink>
          </li>
          <li>
            <NavLink to="/NextEvent/login" className={navLinkStyles}>
              Login
            </NavLink>
          </li>
          <li>
            <NavLink to="/NextEvent/signup" className={navLinkStyles}>
              Sign Up
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default PublicNavbar;
