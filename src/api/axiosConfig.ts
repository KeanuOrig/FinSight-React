import axios from "axios";
import { toast } from "react-toastify";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL, // todo: put in env
  timeout: 1000000, // Timeout for requests in milliseconds
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer YOUR_TOKEN`, // todo: add auth
  },
});

// Optional: Add interceptors for request and response
axiosInstance.interceptors.request.use(
  (config) => {
    // Modify config before request is sent (e.g., add tokens dynamically)
    return config;
  },
  (error) => {
    // Handle request error
    toast.error("Failed to send the request. Please try again.");
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    // Process successful responses
    return response;
  },
  (error) => {

    if (error.response) {
      // The request was made, and the server responded with a status code
      const status = error.response.status;
      const message = error.response.data?.message || "An error occurred";

      switch (status) {
        case 400:
          toast.error("Bad Request: " + message);
          break;
        case 401:
          toast.error("Unauthorized: Please log in again.");
          break;
        case 403:
          toast.error("Forbidden: You don't have permission.");
          break;
        case 404:
          toast.error("Not Found: The resource doesn't exist.");
          break;
        case 500:
          toast.error("Internal Server Error: Try again later.");
          break;
        default:
          toast.error("Error: " + message);
      }
    } else if (error.request) {

      console.error("No Response:", error.request);
      toast.error("No response from the server. Check your connection.");
    } else {

      console.error("Setup Error:", error.message);
      toast.error("Request setup error: " + error.message);
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;