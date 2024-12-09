import React from "react";
import { NavLink } from "react-router-dom";

const SuperAdminNavbar = () => {
  const navLinkStyles = ({ isActive }) =>
    isActive
      ? "text-white bg-blue-600 px-4 py-2 rounded-md"
      : "text-gray-700 hover:text-blue-600 px-4 py-2 rounded-md transition duration-200";

  return (
    <nav className="bg-white shadow-md p-4 sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        {/* Brand Name (Clickable to Home) */}
        <NavLink
          to="/NextEvent/admin/superAdmin/allRequest"
          className="text-2xl font-bold text-blue-700"
        >
          Super Admin Panel
        </NavLink>

        {/* Navigation Links */}
        <ul className="flex space-x-6">
          <li>
            <NavLink
              to="/NextEvent/admin/superAdmin/login"
              className={navLinkStyles}
            >
              Login
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/NextEvent/admin/superAdmin/allRequest"
              className={navLinkStyles}
            >
              All Requests
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default SuperAdminNavbar;
