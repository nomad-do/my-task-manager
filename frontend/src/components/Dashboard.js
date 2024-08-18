import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  const userId = localStorage.getItem('userId'); 

  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={() => navigate('/tasks')}>My Task Manager</button>
      <button onClick={() => navigate(`/edit-profile/${userId}`)}>Edit Profile</button>
    </div>
  );
};

export default Dashboard;
