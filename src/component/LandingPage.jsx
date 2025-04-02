import React from "react";
import { FaBell, FaSearch, FaUserGraduate } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const LandingPage = () => {

  const userRoles = [
    {
      id: 1,
      title: "Are you an Admin?",
      description: "If you manage events, login to the Admin Panel to post updates and notify students.",
      buttonText: "Login as Admin",
      navigateTo: "/NextEvent/admin/login",
    },
    {
      id: 2,
      title: "Are you a Student?",
      description: "Register now to explore events, get notifications, and stay updated.",
      buttonText: "Register as Student",
      navigateTo: "/NextEvent/login",
    },
  ];
  
  const features = [
    {
      id: 1,
      icon: <FaBell className="text-blue-600 text-4xl mb-4 mx-auto" />,
      title: "Instant Notifications",
      description: "Receive email updates about the latest events happening in your college.",
    },
    {
      id: 2,
      icon: <FaSearch className="text-blue-600 text-4xl mb-4 mx-auto" />,
      title: "Event Directory",
      description: "Access a comprehensive list of events and easily search for ones that interest you.",
    },
    {
      id: 3,
      icon: <FaUserGraduate className="text-blue-600 text-4xl mb-4 mx-auto" />,
      title: "User-Friendly Design",
      description: "Enjoy a clean and responsive interface for seamless browsing on all devices.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="  h-screen bg-[url(https://dos.uoregon.edu/sites/default/files/2022-06/IMPACT-games-1440x550.jpg)]  bg-no-repeat bg-cover text-white rounded-b-2xl

  ">
        <div className="w-full h-full bg-black/40 rounded-b-2xl  backdrop-blur-sm py-20 flex items-center justify-center">
          <div className="container mx-auto  text-center px-6">
            <h1 className="text-8xl font-bold mb-4">
              Discover <span className=" underline decoration-blue-500 decoration-5 underline-offset-4 rounded-sm ">Events</span>. Stay Updated.
            </h1>
            <p className="text-xl mb-6">
              Find and participate in exciting college events with ease. Get
              instant notifications and updates.
            </p>
            <div className="flex justify-center">
  <div className="grid grid-cols-2 gap-2 items-center">
    <NavLink
      to="/NextEvent/signup"
      className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-100 transition hover:text-black hover:font-extrabold duration-200 text-center"
    >
      Join Now
    </NavLink>
    <NavLink
      to="/NextEvent/events"
      className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-100 transition hover:text-black hover:font-extrabold duration-200 text-center"
    >
      View All Events
    </NavLink>
  </div>
</div>

           
          </div>
        </div>

      </section>

      {/* Features Section */}
      <section className="container mx-auto py-16 px-6">
        <h2 className="text-5xl font-bold text-center text-gray-800 mb-8">
          Why Choose <span className="underline decoration-blue-500 decoration-4 underline-offset-4 rounded-sm">Next Event</span> ?
        </h2>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.id} className="text-center border-t-4 border-blue-500 p-6   rounded-lg shadow-sm">
              {feature.icon}
              <h3 className="text-xl font-semibold text-blue-600 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
 
      {/* How It Works Section */}
      <section className="bg-blue-400   py-16 px-6">
        <h2 className="text-5xl font-bold text-center text-white mb-8">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Students */}
          <div className="p-6 border rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-white mb-4">
              For Students
            </h3>
            <ol className="list-decimal list-inside text-white space-y-2">
              <li>Students create an account and log in to the platform.</li>
              <li>Admins post events with details and descriptions.</li>
              <li>
                Students receive instant email notifications for each new event.
              </li>
            </ol>
          </div>
          {/* Admins */}
          <div className="p-6 border rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-white mb-4">
              For Admins
            </h3>
            <ol className="list-decimal list-inside text-white space-y-2">
              <li>Admins request approval to gain admin privileges.</li>
              <li>After approval, they log in to the admin dashboard.</li>
              <li>Admins create and post event details directly.</li>
              <li>All students receive email notifications about the event.</li>
            </ol>
          </div>
        </div>
      </section>
 
     

      {/* Admin Section */}
      <div className="  p-6 rounded-md   my-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {userRoles.map((role) => (
        <div key={role.id} className="border rounded-lg p-6 shadow-md bg-white">
          <h2 className="text-xl font-bold text-blue-800 mb-4">{role.title}</h2>
          <p className="text-blue-600 mb-4">{role.description}</p>
          <NavLink
            to={role.navigateTo}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200 flex items-center justify-center space-x-2"
          >
            <span>{role.buttonText}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 10.5v-6a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 003 4.5v9A2.25 2.25 0 005.25 16h6.75M16.5 10.5l3.75 3.75M16.5 10.5L12.75 6.75"
              />
            </svg>
          </NavLink>
        </div>
      ))}
    </div>
      </div>
 {/* Call to Action */}
      <section className=" text-black py-16">
        <div className="container mx-auto text-center px-6">
          <h2 className="text-3xl font-bold mb-4">Ready to Stay Updated?</h2>
          <p className="text-lg mb-6">
            Sign up today and never miss an exciting event again!
          </p>
          <NavLink
            to="/NextEvent/signup"
            className="bg-white text-blue-400 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition duration-200"
          >
            Get Started
          </NavLink>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-blue-900 text-white py-8">
      <div className="container mx-auto px-6">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Logo & Description */}
          <div>
            <h2 className="text-2xl font-bold">Event Portal</h2>
            <p className="text-blue-300 mt-2">
              Your one-stop platform for discovering and managing events effortlessly.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <NavLink to="/NextEvent/events" className="text-blue-300 hover:text-white">
                  Browse Events
                </NavLink>
              </li>
              <li>
                <NavLink to="/NextEvent/login" className="text-blue-300 hover:text-white">
                  Student Login
                </NavLink>
              </li>
              <li>
                <NavLink to="/NextEvent/admin/login" className="text-blue-300 hover:text-white">
                  Admin Login
                </NavLink>
              </li>
              <li>
                <NavLink to="/NextEvent/admin/superadmin/login" className="text-blue-300 hover:text-white">
                  Super Admin Login
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <div className="flex justify-center md:justify-start gap-4 mt-2">
              <a href="#" className="text-blue-300 hover:text-white text-xl">
                <FaFacebookF />
              </a>
              <a href="#" className="text-blue-300 hover:text-white text-xl">
                <FaTwitter />
              </a>
              <a href="#" className="text-blue-300 hover:text-white text-xl">
                <FaInstagram />
              </a>
              <a href="#" className="text-blue-300 hover:text-white text-xl">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center text-blue-300 mt-6 border-t border-blue-600 pt-4">
          <p>&copy; 2024 Event Portal. All rights reserved.</p>
        </div>
      </div>
    </footer>

    </div>
  );
};

export default LandingPage;
