import axios from "axios";
console.log(import.meta.env.VITE_API_BASE_URL)
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
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    // Process successful responses
    return response;
  },
  (error) => {
    // Handle response error (e.g., handle 401 errors globally)
    return Promise.reject(error);
  }
);

export default axiosInstance;