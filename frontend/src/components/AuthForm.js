import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../axiosInstance';

const AuthForm = ({ setToken }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const endpoint = isLogin ? '/auth/login' : '/auth/register';
    
    console.log(`Submitting form to ${endpoint}`);
    
    try {
      const response = await axiosInstance.post(endpoint, { username, password });
      if (isLogin) {
        const { token, refreshToken, userId } = response.data;
        
        if (process.env.NODE_ENV !== 'production') {
          console.log('Login successful, tokens and user ID received.');
        }

        localStorage.setItem('token', token);
        localStorage.setItem('refreshToken', refreshToken);
        localStorage.setItem('userId', userId); 
        setToken(token);
        setError('');
        setSuccessMessage('');
        navigate('/dashboard');
      } else {
        console.log('Registration successful');
        setSuccessMessage('Registration successful, please log in.');
        setError('');
        setIsLogin(true);
        setUsername(''); 
        setPassword(''); 
      }
    } catch (error) {
      console.error('Error during authentication:', error);
      setError('Authentication failed. Please check your credentials and try again.');
      setSuccessMessage('');
    }
  };

  return (
    <form onSubmit={handleSubmit}
    style={{ marginLeft: '20px', marginTop: '20px' }}
    >
      <h2>{isLogin ? 'Login' : 'Register'}</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
      <div>
        <label htmlFor="username">Username:</label>
        <input
          id="username"
          type="text"
          value={username}
          onChange={(e) => {

            if (process.env.NODE_ENV !== 'production') {
              console.log('Username input changed');
            }
            setUsername(e.target.value);
          }}
          required
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => {

            setPassword(e.target.value);
          }}
          required
        />
      </div>
      <button type="submit">{isLogin ? 'Login' : 'Register'}</button>
      <button
        type="button"
        onClick={() => {
          setIsLogin(!isLogin);
          setError('');
          setSuccessMessage('');
          setUsername('');
          setPassword('');
          
          if (process.env.NODE_ENV !== 'production') {
            console.log(`Switched to ${isLogin ? 'Register' : 'Login'} mode`);
          }
        }}
      >
        {isLogin ? 'Switch to Register' : 'Switch to Login'}
      </button>
    </form>
  );
};

export default AuthForm;

