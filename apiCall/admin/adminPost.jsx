import axios from "axios";

const fetchAdminPosts = async () => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_BACKENED}/api/admin/adminPost/`,
      {
        withCredentials: true, // Include cookies in the request
      }
    );
    return response; // Display the posts
  } catch (error) {
    console.error(
      "Error fetching posts:",
      error.response?.data || error.message
    );
    return error.response?.data || error.message;
  }
};

export default fetchAdminPosts;
