// import axios from 'axios';

// const axiosInstance = axios.create({
//   baseURL: 'http://localhost:3001/api',
//   headers: {
//     'Content-Type': 'application/json',
//   },
// });

// axiosInstance.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem('token');
//     console.log('Token retrieved:', token); 
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//       console.log('Authorization header set:', config.headers.Authorization); // Debug log to check header setting
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// export default axiosInstance;

// reduce log (8/16)
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3001/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

let tokenLogged = false; // Flag to prevent multiple logs

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    
    if (token && !tokenLogged) { // Only log once when token exists and has not been logged
      const maskedToken = `${token.substring(0, 5)}...`; // Mask the token
      console.log('Token retrieved:', maskedToken); // Log only a portion of the token
      console.log('Authorization header set:', `Bearer ${maskedToken}`); // Log only a portion of the header
      tokenLogged = true; // Set flag to true after logging
    }
    
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
