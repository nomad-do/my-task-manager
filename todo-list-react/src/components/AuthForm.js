import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AuthForm = ({ setToken }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(false); // Set to false to default to Register view
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const endpoint = isLogin ? '/api/auth/login' : '/api/auth/register';
    try {
      const response = await axios.post(endpoint, { username, password });
      if (isLogin) {
        const { token, refreshToken } = response.data;
        localStorage.setItem('token', token);
        localStorage.setItem('refreshToken', refreshToken);
        setToken(token);
        setError('');
        navigate('/tasks'); // Redirect to tasks after successful login
      } else {
        alert('Registration successful, please log in.');
        setIsLogin(true);
      }
      setUsername(''); // Clear the username field
      setPassword(''); // Clear the password field
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
      <button type="button" onClick={() => { setIsLogin(!isLogin); setError(''); setUsername(''); setPassword(''); }}>
        {isLogin ? 'Switch to Register' : 'Switch to Login'}
      </button>
    </form>
  );
};

export default AuthForm;
