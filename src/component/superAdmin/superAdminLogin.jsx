import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axiosInstance from "../axiosInstance";

function SuperAdminLogin() {
  const [userId, setUser] = useState(""); // State for email
  const [password, setPassword] = useState(""); // State for password
  const navigate = useNavigate(); // For navigation after login

  // Handle the form submission
  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("hd");
    try {
      const response = await axiosInstance.post(
        `${import.meta.env.VITE_BACKENED}/api/superadmin/login`,
        {
          userId: userId,
          password: password,
        }
      );
      console.log(response);
      if (response.status === 200) {
        toast.success(response.data.message);
      }
      setTimeout(() => {
        navigate("/admin/superAdmin/allRequest");
      }, 1000);
      // Handle success (save token to localStorage or handle redirection)

      //   navigate("/admin/superAdmin/allRequest"); // Redirect to Super Admin dashboard
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-blue-50">
      {" "}
      <ToastContainer />
      <div className="w-full max-w-sm bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">
          Super Admin Login
        </h2>
        <form onSubmit={handleLogin} className="space-y-4">
          {/* Email Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              UserId:
            </label>
            <input
              name="userId"
              onChange={(e) => setUser(e.target.value)}
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
              name="password"
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
      </div>
    </div>
  );
}

export default SuperAdminLogin;
