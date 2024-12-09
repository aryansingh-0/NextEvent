import axios from "axios";
import React, { useEffect, useState } from "react";
import { Await, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import fetchAdminPosts from "../../../apiCall/admin/adminPost";

const ApproveAdmins = () => {
  const navigate = useNavigate();
  const [pendingAdmins, setPendingAdmins] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // State to track loading
  const [isError, setIsError] = useState(false); // State to track errors

  useEffect(() => {
    const fetchPendingAdmins = async () => {
      try {
        await fetchAdminPosts("aryan");
        const response = await axios.get(
          `${import.meta.env.VITE_BACKENED}/api/superadmin/pending`,
          {
            withCredentials: true, // Include cookies in the request
          }
        );
        setPendingAdmins(response.data.data); // Access the correct `data` array

        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsError(true);
        setIsLoading(false);
      }
    };

    fetchPendingAdmins();
  }, []);

  const handleDecline = async (id) => {
    try {
      const declineResponse = await axios.delete(
        `${import.meta.env.VITE_BACKENED}/api/superadmin/decline/${id}`,
        {
          withCredentials: true, // Include cookies in the request
        }
      );
      toast.success(declineResponse.data.message);
      setPendingAdmins(pendingAdmins.filter((admin) => admin._id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  const handleApprove = async (id) => {
    try {
      const approveResponse = await axios.post(
        `${import.meta.env.VITE_BACKENED}/api/superadmin/approve/${id}`,
        {}, // Send an empty object as the body
        {
          withCredentials: true, // Include cookies in the request
        }
      );
      toast.success(approveResponse.data.message);
      setPendingAdmins(pendingAdmins.filter((admin) => admin._id !== id));
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || "Failed to approve admin.");
    }
  };
  return (
    <div className="flex justify-center items-center min-h-screen bg-blue-50">
      <ToastContainer />

      <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg p-6">
        {isLoading ? (
          // Loading state
          <p className="text-center text-blue-500 font-semibold">
            Fetching data...
          </p>
        ) : isError ? (
          // Error state
          <p className="text-center text-red-500 font-semibold">
            Access Denied
            <button
              className="bg-blue-500 ml-5 px-4 py-2 rounded-md text-white cursor-pointer hover:underline"
              onClick={() => navigate("/admin/superAdmin/login")}
            >
              Login here
            </button>
          </p>
        ) : pendingAdmins.length === 0 ? (
          // No requests
          <p className="text-center text-gray-600 font-medium">
            No requests are available.
          </p>
        ) : (
          // List of pending admin requests
          <ul className="space-y-4">
            {pendingAdmins.map((admin) => (
              <li
                key={admin._id}
                className="flex justify-between items-center bg-blue-100 p-4 rounded-lg shadow-sm"
              >
                {/* Admin Details */}
                <div>
                  <p className="text-sm font-bold text-gray-800">
                    {admin.name}
                  </p>
                  <p className="text-sm text-gray-600">{admin.emailId}</p>
                </div>
                {/* Action Buttons */}
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleApprove(admin._id)}
                    className="px-3 py-1 bg-blue-500 text-white text-sm font-semibold rounded-md shadow-md hover:bg-blue-600 transition duration-200"
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => handleDecline(admin._id)}
                    className="px-3 py-1 bg-red-500 text-white text-sm font-semibold rounded-md shadow-md hover:bg-red-600 transition duration-200"
                  >
                    Decline
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ApproveAdmins;
