import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // To navigate after login
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AdminLogin() {
  const [email, setEmail] = useState(""); // State for email
  const [password, setPassword] = useState(""); // State for password
  const navigate = useNavigate(); // To navigate to another page after successful login

  // Handle the form submission
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKENED}/api/auth/admin/login`,
        {
          emailId: email,
          password: password,
        }
      );
      if (response.status === 200) {
        toast.success(response.data.message);
      }

      setTimeout(() => {
        navigate("/NextEvent/admin/dashboard");
      }, 1000);
    } catch (error) {
      toast.error("Invalid email or password. Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-blue-50">
      <ToastContainer />
      <div className="w-full max-w-sm bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">
          Admin Login
        </h2>
        <form onSubmit={handleLogin} className="space-y-4">
          {/* Email Input */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Password Input */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password:
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg shadow-md hover:bg-blue-600 transition duration-200"
          >
            Login
          </button>
        </form>

        {/* User Login Link */}
        <p className="mt-4 text-center text-sm text-gray-600">
          Not an admin?{" "}
          <span
            className="text-blue-500 cursor-pointer hover:underline"
            onClick={() => navigate("/NextEvent/admin/adminRequest")}
          >
            Go to Admin Request
          </span>
        </p>
      </div>
    </div>
  );
}

export default AdminLogin;
