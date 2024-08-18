import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3001/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

let tokenLogged = false; 

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    
    if (token && !tokenLogged) { 
      const maskedToken = `${token.substring(0, 5)}...`; 
      console.log('Token retrieved:', maskedToken); 
      console.log('Authorization header set:', `Bearer ${maskedToken}`); 
      tokenLogged = true; 
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
