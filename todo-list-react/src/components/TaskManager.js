
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskList from './TaskList';
import TaskModal from './TaskModal';
import { Button } from 'react-bootstrap';

const TaskManager = ({ onLogout }) => {
  const [tasks, setTasks] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [newTask, setNewTask] = useState({ title: '', urgency: 1, importance: 1, effort: 1 });
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTasks = async () => {
      const token = localStorage.getItem('token');
      if (!token) return;
      try {
        const response = await axios.get('/api/tasks', {
          headers: { 'Authorization': `Bearer ${token}` }
        });
        const sortedTasks = response.data.sort((a, b) => b.priority - a.priority);
        setTasks(sortedTasks);
      } catch (error) {
        console.error('Error fetching tasks:', error);
        setError('Error fetching tasks');
        if (error.response && error.response.status === 403) {
          localStorage.removeItem('token'); // Clear token if unauthorized
          onLogout(); // Trigger logout
        }
      }
    };
    fetchTasks();
  }, [onLogout]);

  const handleAddTask = async () => {
    const { urgency, importance, effort, title } = newTask;
    const priority = urgency + importance + effort;

    const token = localStorage.getItem('token');
    try {
      const response = await axios.post('/api/tasks', { title, urgency, importance, effort, priority }, {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      const updatedTasks = [...tasks, response.data];
      const sortedTasks = updatedTasks.sort((a, b) => b.priority - a.priority);
      setTasks(sortedTasks);
      setShowModal(false);
      setNewTask({ title: '', urgency: 1, importance: 1, effort: 1 });
    } catch (error) {
      console.error('Error adding task:', error);
      setError('Error adding task');
      if (error.response && error.response.status === 403) {
        localStorage.removeItem('token'); // Clear token if unauthorized
        onLogout(); // Trigger logout
      }
    }
  };

  const handleUpdateTask = async (updatedTask) => {
    const { _id, title, urgency, importance, effort } = updatedTask;
    const priority = urgency + importance + effort;

    const token = localStorage.getItem('token');
    try {
      await axios.put(`/api/tasks/${_id}`, { title, urgency, importance, effort, priority }, {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      const updatedTasks = tasks.map(task => task._id === _id ? { ...updatedTask, priority } : task);
      const sortedTasks = updatedTasks.sort((a, b) => b.priority - a.priority);
      setTasks(sortedTasks);
    } catch (error) {
      console.error('Error updating task:', error);
      setError('Error updating task');
      if (error.response && error.response.status === 403) {
        localStorage.removeItem('token'); // Clear token if unauthorized
        onLogout(); // Trigger logout
      }
    }
  };

  const handleDeleteTask = async (taskId) => {
    const token = localStorage.getItem('token');
    try {
      await axios.delete(`/api/tasks/${taskId}`, {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      const updatedTasks = tasks.filter(task => task._id !== taskId);
      setTasks(updatedTasks);
    } catch (error) {
      console.error('Error deleting task:', error);
      setError('Error deleting task');
      if (error.response && error.response.status === 403) {
        localStorage.removeItem('token'); // Clear token if unauthorized
        onLogout(); // Trigger logout
      }
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTask(prevTask => ({
      ...prevTask,
      [name]: name === 'title' ? value : Math.max(1, Math.min(parseInt(value, 10) || 1, 5))
    }));
  };

  return (
    <div>
      <Button variant="primary" onClick={() => setShowModal(true)}>Add New Task</Button>
      <Button variant="danger" onClick={onLogout} className="ml-3">Logout</Button>
      {error && <p>{error}</p>}
      <TaskList tasks={tasks} updateTask={handleUpdateTask} deleteTask={handleDeleteTask} />
      <TaskModal
        showModal={showModal}
        setShowModal={setShowModal}
        newTask={newTask}
        handleInputChange={handleInputChange}
        handleAddTask={handleAddTask}
        error={error}
      />
    </div>
  );
};

export default TaskManager;





