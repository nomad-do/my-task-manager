// // App.js
// import React, { useState } from 'react';
// import AuthForm from './components/AuthForm';
// import TaskManager from './components/TaskManager';
// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

// function App() {
//     const [token, setToken] = useState(localStorage.getItem('token'));

//     return (
//         <div className="container">
//             <h1>My Task Manager</h1>
//             {token ? <TaskManager /> : <AuthForm setToken={setToken} />}
//         </div>
//     );
// }

// export default App;


import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AuthForm from './components/AuthForm';
import TaskManager from './components/TaskManager';
import { jwtDecode } from 'jwt-decode';

const App = () => {
  const [token, setToken] = useState(localStorage.getItem('token'));

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token && isTokenExpired(token)) {
      localStorage.removeItem('token');
      setToken(null);
    }
  }, []);

  const handleLogin = (newToken) => {
    localStorage.setItem('token', newToken);
    setToken(newToken);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setToken(null);
  };

  return (
    <Router>
      <Routes>
        <Route path="/auth" element={<AuthForm setToken={handleLogin} />} />
        <Route path="/tasks" element={token ? <TaskManager onLogout={handleLogout} /> : <Navigate to="/auth" />} />
        <Route path="/" element={<Navigate to="/tasks" />} />
      </Routes>
    </Router>
  );
};

const isTokenExpired = (token) => {
  try {
    const decodedToken = jwtDecode(token);
    const currentTime = Date.now() / 1000; // Current time in seconds
    return decodedToken.exp < currentTime; // Return true if expired
  } catch (error) {
    return true; // If there is an error decoding, consider the token expired
  }
};

export default App;
