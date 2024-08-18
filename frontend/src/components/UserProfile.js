import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axiosInstance from '../axiosInstance';

const UserProfile = () => {
  const { userId } = useParams();
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');
  const [editing, setEditing] = useState(false);
  const [newUsername, setNewUsername] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axiosInstance.get(`/auth/profile/${userId}`);
        console.log('API Response:', response);
        if (response && response.data) {
          setUser(response.data);
          setNewUsername(response.data.username);
        } else {
          throw new Error('Response data is undefined');
        }
      } catch (error) {
        console.error('Error fetching profile:', error.message);
        setError('An error occurred while fetching the profile.');
      }
    };

    fetchUserProfile();
  }, [userId]);

  const handleEdit = async () => {
    try {
      const response = await axiosInstance.put(`/auth/profile/${userId}`, { username: newUsername });
      setUser(response.data);
      setEditing(false);
    } catch (error) {
      console.error('Error updating profile:', error.message);
      setError('An error occurred while updating the profile.');
    }
  };

  const handleDelete = async () => {
    try {
      await axiosInstance.delete(`/auth/profile/${userId}`);
      navigate('/deleted');
    } catch (error) {
      console.error('Error deleting profile:', error.message);
      setError('An error occurred while deleting the profile.');
    }
  };

  if (error) {
    return <div>{error}</div>;
  }

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>User Profile</h2>
      {editing ? (
        <div>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={newUsername}
            onChange={(e) => setNewUsername(e.target.value)}
          />
          <button type="button" onClick={handleEdit}>
            Save
          </button>
        </div>
      ) : (
        <div>
          <p>Username: {user.username}</p>
          <button type="button" onClick={() => setEditing(true)}>
            Edit Profile
          </button>
          <button type="button" onClick={handleDelete}>
            Delete Profile
          </button>
        </div>
      )}
    </div>
  );
};

export default UserProfile;

