import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // to navigate to signup page
import { ToastContainer, toast } from "react-toastify";

import axios from "axios";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  // Handle login form submission
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKENED}/api/user/login`,
        {
          emailId: email,
          password: password,
        }
      );

      // If login is successful, redirect to home or dashboard
      console.log(response.data);
      // Optionally store token in local storage or cookies
      navigate("/NextEvent/events"); // Example redirection to a home page
    } catch (error) {
      setErrorMessage("Invalid email or password.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-blue-50">
      <ToastContainer />
      <div className="w-full max-w-sm bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">
          Login
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

          {/* Error Message */}
          {errorMessage && (
            <p className="text-red-500 text-center text-sm">{errorMessage}</p>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg shadow-md hover:bg-blue-600 transition duration-200"
          >
            Login
          </button>
        </form>

        {/* Sign Up Link */}
        <p className="mt-4 text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <span
            className="text-blue-500 cursor-pointer hover:underline"
            onClick={() => navigate("/NextEvent/signup")}
          >
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
}

export default Login;
