import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaBell,
  FaSearch,
  FaUserGraduate,
  FaEnvelope,
  FaUsers,
} from "react-icons/fa";

const LandingPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto text-center px-6">
          <h1 className="text-4xl font-bold mb-4">
            Discover Events. Stay Updated.
          </h1>
          <p className="text-lg mb-6">
            Find and participate in exciting college events with ease. Get
            instant notifications and updates.
          </p>
          <NavLink
            to="/signup"
            className="bg-white text-blue-600 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition duration-200"
          >
            Join Now
          </NavLink>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Why Choose Event Portal?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 border rounded-lg shadow-sm">
            <FaBell className="text-blue-600 text-4xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-blue-600 mb-2">
              Instant Notifications
            </h3>
            <p className="text-gray-600">
              Receive email updates about the latest events happening in your
              college.
            </p>
          </div>
          <div className="text-center p-6 border rounded-lg shadow-sm">
            <FaSearch className="text-blue-600 text-4xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-blue-600 mb-2">
              Event Directory
            </h3>
            <p className="text-gray-600">
              Access a comprehensive list of events and easily search for ones
              that interest you.
            </p>
          </div>
          <div className="text-center p-6 border rounded-lg shadow-sm">
            <FaUserGraduate className="text-blue-600 text-4xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-blue-600 mb-2">
              User-Friendly Design
            </h3>
            <p className="text-gray-600">
              Enjoy a clean and responsive interface for seamless browsing on
              all devices.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-blue-50 py-16 px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Students */}
          <div className="p-6 border rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-blue-600 mb-4">
              For Students
            </h3>
            <ol className="list-decimal list-inside text-gray-600 space-y-2">
              <li>Students create an account and log in to the platform.</li>
              <li>Admins post events with details and descriptions.</li>
              <li>
                Students receive instant email notifications for each new event.
              </li>
            </ol>
          </div>
          {/* Admins */}
          <div className="p-6 border rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-blue-600 mb-4">
              For Admins
            </h3>
            <ol className="list-decimal list-inside text-gray-600 space-y-2">
              <li>Admins request approval to gain admin privileges.</li>
              <li>After approval, they log in to the admin dashboard.</li>
              <li>Admins create and post event details directly.</li>
              <li>All students receive email notifications about the event.</li>
            </ol>
          </div>
        </div>
      </section>

      {/* Explore Events Section */}
      <section className="py-16 px-6">
        <div className="bg-green-50 p-6 rounded-md shadow-md">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            Explore All Events
          </h2>
          <p className="text-gray-600 mb-4">
            Discover the latest events happening around you. Click below to view
            all events.
          </p>
          <NavLink
            to="/events"
            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-200"
          >
            View All Events
          </NavLink>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto text-center px-6">
          <h2 className="text-3xl font-bold mb-4">Ready to Stay Updated?</h2>
          <p className="text-lg mb-6">
            Sign up today and never miss an exciting event again!
          </p>
          <NavLink
            to="/signup"
            className="bg-white text-blue-600 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition duration-200"
          >
            Get Started
          </NavLink>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Event Portal. All rights reserved.</p>
          <NavLink
            to="/admin/superadmin/login"
            className="  text-[grey] px-4 py-2 rounded-md "
          >
            Login as Super Admin
          </NavLink>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
