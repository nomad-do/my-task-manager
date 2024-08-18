import React, { useState, useEffect } from 'react';
import AppRoutes from './AppRoutes';
import refreshToken from './utils/refreshToken';
import { jwtDecode } from 'jwt-decode';

const isTokenExpired = (token) => {
  if (!token) return true;
  const { exp } = jwtDecode(token);
  if (!exp) return true;
  const expiryDate = new Date(exp * 1000);
  return expiryDate < new Date();
};

const App = () => {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [refreshTokenValue, setRefreshTokenValue] = useState(localStorage.getItem('refreshToken'));
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleToken = async () => {
      if (isTokenExpired(token)) {
        if (refreshTokenValue) {
          try {
            const newToken = await refreshToken(refreshTokenValue);
            setToken(newToken);
            localStorage.setItem('token', newToken);
          } catch (error) {
            localStorage.removeItem('token');
            localStorage.removeItem('refreshToken');
            setToken(null);
            setRefreshTokenValue(null);
          }
        } else {
          localStorage.removeItem('token');
          setToken(null);
        }
      }
      setLoading(false); 
    };
    handleToken();
  }, [token, refreshTokenValue]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('refreshToken');
    setToken(null);
    setRefreshTokenValue(null);
  };

  if (loading) {
    return <div>Loading...</div>; 
  }

  return <AppRoutes token={token} handleLogout={handleLogout} setToken={setToken} />;
};

export default App;
