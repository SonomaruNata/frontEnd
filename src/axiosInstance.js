import axios from 'axios';

// Get the token from localStorage (you should have a login process that saves the JWT here)
const token = localStorage.getItem('token');

// Create axios instance
const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000', // Your backend base URL
  headers: {
    Authorization: token ? `Bearer ${token}` : '', // Attach JWT if available
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
