import React from "react";
import { NavLink } from "react-router-dom";

const AdminNavbar = () => {
  const navLinkStyles = ({ isActive }) =>
    isActive
  ? "text-white bg-blue-500 px-4 py-2 rounded-md"
  : "text-blue-700 font-bold hover:text-blue-500 px-4 py-2 rounded-md transition";

  return (
    <nav className="bg-white/10 backdrop-blur-lg shadow-lg border border-white/20 p-4 sticky top-0 z-10 rounded-xl">

      <div className="container mx-auto flex justify-between items-center">
        {/* Brand Name */}
        <NavLink
          to="/NextEvent/admin/dashboard"
          className="text-2xl font-extrabold text-blue-600"
        >
          Admin Panel
        </NavLink>

        {/* Navigation Links */}
        <ul className="flex text-blue-600 space-x-6">
          <li>
            <NavLink
              to="/NextEvent/admin/adminRequest"
              className={navLinkStyles}
            >
              Admin Requests
            </NavLink>
          </li>
          <li>
            <NavLink to="/NextEvent/admin/login" className={navLinkStyles}>
              Login
            </NavLink>
          </li>
          <li>
            <NavLink to="/NextEvent/admin/post" className={navLinkStyles}>
              Create Post
            </NavLink>
          </li>
          <li>
            <NavLink to="/NextEvent/admin/dashboard" className={navLinkStyles}>
              Dashboard
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default AdminNavbar;
