import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axiosInstance from '../axiosInstance';

const EditProfile = () => {
  const { userId } = useParams();
  const [profile, setProfile] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axiosInstance.get(`/auth/profile/${userId}`);
        setProfile({
          username: response.data.username || '', 
          password: '', 
        });
      } catch (error) {
        console.error('Error fetching profile:', error);
        setError('Error fetching profile');
      }
    };

    fetchProfile();
  }, [userId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value, 
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.put(`/auth/profile/${userId}`, {
        username: profile.username, 
        password: profile.password, 
      });
      setMessage('Profile updated successfully');
      console.log('Profile update response:', response.data);
    } catch (error) {
      console.error('Error updating profile:', error);
      setError('Error updating profile');
    }
  };

  if (error) {
    return <div>{error}</div>;
  }

  if (!profile.username) { 
    return <div>Loading...</div>;
  }

  return (
    <div style={{ marginLeft: '20px', marginTop: '20px' }}>
      <h2>Edit Profile</h2>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={profile.username}
            onChange={handleInputChange}
            required
            autoComplete="username" 
          />
        </div>
        <div>
          <label htmlFor="password">New Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={profile.password}
            onChange={handleInputChange}
            required
            autoComplete="new-password" 
          />
        </div>
        <button type="submit">Save Changes</button>
        <button type="button" onClick={() => navigate('/tasks')}>
          My Task Manager
        </button>
      </form>
    </div>
  );
};

export default EditProfile;
