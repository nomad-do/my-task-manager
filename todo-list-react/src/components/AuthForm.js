import React, { useState } from 'react';
import axios from 'axios';

const AuthForm = ({ setToken }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const endpoint = isLogin ? '/auth/login' : '/auth/register';
    try {
      console.log('Sending request to:', endpoint);
      console.log('Request payload:', { username, password });
      const response = await axios.post(endpoint, { username, password });
      console.log('Response:', response.data);
      if (isLogin) {
        setToken(response.data.token);
        localStorage.setItem('token', response.data.token);
        setError('');
        // Redirect to tasks or another appropriate page
      } else {
        alert('Registration successful, please log in.');
        setIsLogin(true);
      }
    } catch (error) {
      console.error('Error:', error);
      setError('Authentication failed. Please check your credentials and try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{isLogin ? 'Login' : 'Register'}</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div>
        <label>Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit">{isLogin ? 'Login' : 'Register'}</button>
      <button type="button" onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? 'Switch to Register' : 'Switch to Login'}
      </button>
    </form>
  );
};

export default AuthForm;
