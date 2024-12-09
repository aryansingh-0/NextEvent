import axios from "axios";

const axiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_BACKENED}`, // Replace with your backend URL
  withCredentials: true, // Enable cookies
});

export default axiosInstance;
