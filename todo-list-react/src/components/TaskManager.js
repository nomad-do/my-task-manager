// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import TaskList from './TaskList';
// import TaskModal from './TaskModal';
// import { Button } from 'react-bootstrap';

// const TaskManager = ({ onLogout }) => {
//   const [tasks, setTasks] = useState([]);
//   const [showModal, setShowModal] = useState(false);
//   const [newTask, setNewTask] = useState({ title: '', urgency: 1, importance: 1, effort: 1 });
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchTasks = async () => {
//       const token = localStorage.getItem('token');
//       if (!token) return;
//       try {
//         const response = await axios.get('/api/tasks', {
//           headers: { 'Authorization': `Bearer ${token}` }
//         });
//         setTasks(response.data);
//       } catch (error) {
//         console.error('Error fetching tasks:', error);
//         setError('Error fetching tasks');
//         if (error.response && error.response.status === 403) {
//           localStorage.removeItem('token'); // Clear token if unauthorized
//           onLogout(); // Trigger logout
//         }
//       }
//     };
//     fetchTasks();
//   }, [onLogout]);

//   const handleAddTask = async () => {
//     const { urgency, importance, effort, title } = newTask;
//     const priority = urgency + importance + effort;

//     const token = localStorage.getItem('token');
//     try {
//       const response = await axios.post('/api/tasks', { title, urgency, importance, effort, priority }, {
//         headers: { 'Authorization': `Bearer ${token}` }
//       });
//       setTasks(prevTasks => [...prevTasks, response.data]);
//       setShowModal(false);
//       setNewTask({ title: '', urgency: 1, importance: 1, effort: 1 });
//     } catch (error) {
//       console.error('Error adding task:', error);
//       setError('Error adding task');
//       if (error.response && error.response.status === 403) {
//         localStorage.removeItem('token'); // Clear token if unauthorized
//         onLogout(); // Trigger logout
//       }
//     }
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewTask(prevTask => ({
//       ...prevTask,
//       [name]: name === 'title' ? value : Math.max(1, Math.min(parseInt(value, 10) || 1, 5))
//     }));
//   };

//   return (
//     <div>
//       <Button variant="primary" onClick={() => setShowModal(true)}>Add New Task</Button>
//       <Button variant="danger" onClick={onLogout} className="ml-3">Logout</Button>
//       {error && <p>{error}</p>}
//       <TaskList tasks={tasks} />
//       <TaskModal
//         showModal={showModal}
//         setShowModal={setShowModal}
//         newTask={newTask}
//         handleInputChange={handleInputChange}
//         handleAddTask={handleAddTask}
//         error={error}
//       />
//     </div>
//   );
// };

// export default TaskManager;


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
        setTasks(response.data);
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

    const token = localStorage.getItem('token');
    try {
      const response = await axios.post('/api/tasks', { title, urgency, importance, effort }, {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      setTasks(prevTasks => [...prevTasks, response.data]);
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
      <TaskList tasks={tasks} />
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


