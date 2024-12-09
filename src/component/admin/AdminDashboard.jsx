import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import fetchAdminPosts from "../../../apiCall/admin/adminPost";

const AdminDashboard = () => {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isAdmin, setisAdmin] = useState(false);
  const [fetchError, setfetchError] = useState();
  const navigate = useNavigate();
  // Fetch events (replace URL with your API endpoint)
  useEffect(() => {
    navigate;
    const fetchEvents = async () => {
      try {
        const response = await fetchAdminPosts(); // Replace with your API
        console.log(response);
        if (response.status != 200) {
          setfetchError(response.message);
        } else {
          setEvents(response.data);
          console.log(response);
          setisAdmin(true);
        }
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };
    fetchEvents();
  }, []);

  // Delete event
  const deleteEvent = async (id) => {
    try {
      await axios.delete(
        `${import.meta.env.VITE_BACKENED}/api/admin/deletePost/${id}`,
        {
          withCredentials: true,
        }
      );
      setEvents(events.filter((event) => event._id !== id));
      setSelectedEvent(null); // Close modal after deletion
    } catch (error) {
      console.error("Error deleting event:", error);
    }
  };

  return (
    <div className="min-h-screen bg-blue-50 p-6">
      <h1 className="text-3xl font-bold text-blue-600 text-center mb-8">
        Admin Dashboard{console.log(isAdmin)}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {isAdmin ? (
          events.map((event) => (
            <div
              className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer overflow-hidden"
              key={event._id}
              onClick={() => setSelectedEvent(event)}
            >
              <img
                src={event.imageUrl}
                alt={event.title}
                className="w-full h-40 object-contain"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-blue-700 truncate">
                  {event.title}
                </h3>
                <p className="text-sm text-gray-600">By: {event.writtenBy}</p>
              </div>
            </div>
          ))
        ) : isAdmin && events.length === 0 ? (
          <p>No Post</p>
        ) : (
          <p className="text-center text-red-500 font-semibold">
            {fetchError}
            <button
              className="bg-blue-500 ml-5 px-4 py-2 rounded-md text-white cursor-pointer hover:underline"
              onClick={() => navigate("/NextEvent/admin/login")}
            >
              Login here
            </button>
          </p>
        )}
      </div>

      {/* Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6 relative">
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              onClick={() => setSelectedEvent(null)}
            >
              &times;
            </button>
            <img
              src={selectedEvent.imageUrl}
              alt={selectedEvent.title}
              className="w-full h-48 object-contain rounded-lg mb-4"
            />
            <h2 className="text-2xl font-bold text-blue-700 mb-2">
              {selectedEvent.title}
            </h2>
            <p className="text-gray-700 mb-4">{selectedEvent.description}</p>
            <p className="text-sm text-gray-600 mb-2">
              <strong>Tags:</strong> {selectedEvent.tags.join(", ")}
            </p>
            <p className="text-sm text-gray-600 mb-4">
              <strong>Written By:</strong> {selectedEvent.writtenBy}
            </p>
            <button
              className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition-colors w-full"
              onClick={() => deleteEvent(selectedEvent._id)}
            >
              Delete Event
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
