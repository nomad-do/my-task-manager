import axios from 'axios';

// Replace 'your-static-token-here' with your actual token
const token = 'your-static-token-here';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000/api',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`,
  },
});

export default axiosInstance;
