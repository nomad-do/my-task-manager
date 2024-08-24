import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AuthForm from './components/AuthForm';
import TaskManager from './components/TaskManager';
import EditProfile from './components/EditProfile';
import Dashboard from './components/Dashboard';
import SanitizeInput from './components/SanitizeInput';

const AppRoutes = ({ token, handleLogout, setToken }) => {
  return (
    <Routes>
      <Route path="/login" element={<AuthForm setToken={setToken} />} />
      <Route path="/dashboard" element={token ? <Dashboard /> : <Navigate to="/login" />} />
      <Route
        path="/tasks"
        element={token ? <TaskManager onLogout={handleLogout} /> : <Navigate to="/login" />}
      />
      <Route
        path="/edit-profile/:userId"
        element={token ? <EditProfile /> : <Navigate to="/login" />}
      />
      <Route path="/sanitize" element={<SanitizeInput />} /> 
      <Route path="/" element={<Navigate to="/login" />} />
    </Routes>
  );
};

export default AppRoutes;

