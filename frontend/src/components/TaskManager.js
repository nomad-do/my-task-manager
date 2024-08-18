import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import TaskList from './TaskList';
import TaskTableHeader from './TaskTableHeader';
import axiosInstance from '../axiosInstance';

const TaskManager = ({ initialTasks = [] }) => {
  const [tasks, setTasks] = useState(initialTasks);
  const [newTask, setNewTask] = useState({
    title: '',
    urgency: 1,
    importance: 1,
    effort: 1,
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editTaskId, setEditTaskId] = useState(null);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axiosInstance.get('/tasks');
        const sortedTasks = response.data.sort((a, b) => b.total_score - a.total_score);
        setTasks(sortedTasks);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };
    fetchTasks();
  }, []);

  const handleAddTask = async () => {
    const { title, urgency, importance, effort } = newTask;
    const total_score = Number(urgency) + Number(importance) + Number(effort);
    try {
      const response = await axiosInstance.post('/tasks', { title, urgency, importance, effort, total_score });
      const updatedTasks = [...tasks, response.data];
      const sortedTasks = updatedTasks.sort((a, b) => b.total_score - a.total_score);
      setTasks(sortedTasks);
      setNewTask({ title: '', urgency: 1, importance: 1, effort: 1 });
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  const handleEditTask = async () => {
    const { title, urgency, importance, effort } = newTask;
    const total_score = Number(urgency) + Number(importance) + Number(effort);
    try {
      const response = await axiosInstance.put(`/tasks/${editTaskId}`, { title, urgency, importance, effort, total_score });
      const updatedTasks = tasks.map(task => (task._id === editTaskId ? response.data : task));
      const sortedTasks = updatedTasks.sort((a, b) => b.total_score - a.total_score);
      setTasks(sortedTasks);
      setNewTask({ title: '', urgency: 1, importance: 1, effort: 1 });
      setIsEditing(false);
      setEditTaskId(null);
    } catch (error) {
      console.error('Error editing task:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const numericValue = Math.max(1, Math.min(5, Number(value))); 
    setNewTask({ ...newTask, [name]: name === 'title' ? value : numericValue });
  };

  const handleDeleteTask = async (taskId) => {
    try {
      await axiosInstance.delete(`/tasks/${taskId}`);
      const updatedTasks = tasks.filter(task => task._id !== taskId);
      setTasks(updatedTasks);
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  const handleEditClick = (task) => {
    setNewTask({ title: task.title, urgency: task.urgency, importance: task.importance, effort: task.effort });
    setIsEditing(true);
    setEditTaskId(task._id);
  };

  const handleCancelEdit = () => {
    setNewTask({ title: '', urgency: 1, importance: 1, effort: 1 });
    setIsEditing(false);
    setEditTaskId(null);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('userId');
    window.location.reload();
  };

  return (
    <div style={{ margin: '20px' }}>
      <h1>Task Manager</h1>
      <table style={{ width: '100%', textAlign: 'left', marginBottom: '20px' }}>
        <TaskTableHeader />
        <tbody>
          <tr>
            <td>
              <input
                name="title"
                placeholder="New Task Title"
                type="text"
                value={newTask.title}
                onChange={handleChange}
                style={{ width: '100%', padding: '10px', fontSize: '16px' }}
              />
            </td>
            <td>
              <input
                name="urgency"
                placeholder="Urgency"
                type="number"
                min="1"
                max="5"
                value={newTask.urgency}
                onChange={handleChange}
                style={{ width: '100%', padding: '10px', fontSize: '16px' }}
              />
            </td>
            <td>
              <input
                name="importance"
                placeholder="Importance"
                type="number"
                min="1"
                max="5"
                value={newTask.importance}
                onChange={handleChange}
                style={{ width: '100%', padding: '10px', fontSize: '16px' }}
              />
            </td>
            <td>
              <input
                name="effort"
                placeholder="Effort"
                type="number"
                min="1"
                max="5"
                value={newTask.effort}
                onChange={handleChange}
                style={{ width: '100%', padding: '10px', fontSize: '16px' }}
              />
            </td>
            <td>
              <input
                name="total_score"
                placeholder="Total Score"
                type="number"
                value={Number(newTask.urgency) + Number(newTask.importance) + Number(newTask.effort)}
                readOnly
                style={{ width: '100%', padding: '10px', fontSize: '16px' }}
              />
            </td>
            <td>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                {isEditing ? (
                  <>
                    <Button className="btn btn-primary" type="button" onClick={handleEditTask}>
                      Save Task
                    </Button>
                    <Button className="btn btn-secondary" type="button" onClick={handleCancelEdit}>
                      Cancel
                    </Button>
                  </>
                ) : (
                  <Button className="btn btn-primary" type="button" onClick={handleAddTask}>
                    Add New Task
                  </Button>
                )}
                <Button className="btn btn-danger" type="button" onClick={handleLogout}>
                  Logout
                </Button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <TaskList tasks={tasks} onDeleteTask={handleDeleteTask} onEditClick={handleEditClick} />
    </div>
  );
};

export default TaskManager;
