import React from "react";
import { NavLink } from "react-router-dom";

const AdminNavbar = () => {
  const navLinkStyles = ({ isActive }) =>
    isActive
      ? "text-white bg-blue-500 px-4 py-2 rounded-md"
      : "text-gray-700 hover:text-blue-500 px-4 py-2 rounded-md transition duration-200";

  return (
    <nav className="bg-white shadow-md p-4 sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        {/* Brand Name */}
        <NavLink
          to="/admin/dashboard"
          className="text-2xl font-extrabold text-blue-600"
        >
          Admin Panel
        </NavLink>

        {/* Navigation Links */}
        <ul className="flex space-x-6">
          <li>
            <NavLink to="/admin/adminRequest" className={navLinkStyles}>
              Admin Requests
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin/login" className={navLinkStyles}>
              Login
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin/post" className={navLinkStyles}>
              Create Post
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin/dashboard" className={navLinkStyles}>
              Dashboard
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default AdminNavbar;
