// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import TaskList from './TaskList';
// import TaskModal from './TaskModal';
// import { Button } from 'react-bootstrap';

// const TaskManager = () => {
//     const [tasks, setTasks] = useState([]);
//     const [showModal, setShowModal] = useState(false);
//     const [newTask, setNewTask] = useState({ title: '', urgency: 1, importance: 1, effort: 1 });
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         // Retrieve token from localStorage
//         const token = localStorage.getItem('token');

//         // Fetch tasks from the API when the component mounts
//         axios.get('/api/tasks', {
//             headers: { 'Authorization': `Bearer ${token}` }
//         })
//             .then(response => {
//                 // Sort tasks by priority and set state
//                 setTasks(sortTasks(response.data));
//             })
//             .catch(error => {
//                 console.error('Error fetching tasks:', error);
//                 setError('Error fetching tasks');
//             });
//     }, []);

//     const calculatePriority = (urgency, importance, effort) => {
//         return urgency + importance + effort;
//     };

//     const handleAddTask = () => {
//         const { urgency, importance, effort, title } = newTask;
//         const totalScore = calculatePriority(urgency, importance, effort);
//         const taskWithPriority = {
//             title,
//             urgency,
//             importance,
//             effort,
//             priority: totalScore
//         };

//         // Retrieve token from localStorage
//         const token = localStorage.getItem('token');

//         axios.post('/api/tasks', taskWithPriority, {
//             headers: { 'Authorization': `Bearer ${token}` }
//         })
//             .then(response => {
//                 // Update tasks state with sorted tasks
//                 setTasks(prevTasks => sortTasks([...prevTasks, response.data]));
//                 // Reset form and hide modal
//                 setShowModal(false);
//                 setNewTask({ title: '', urgency: 1, importance: 1, effort: 1 });
//             })
//             .catch(error => {
//                 console.error('Error adding task:', error);
//                 setError('Error adding task');
//             });
//     };

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setNewTask(prevTask => ({
//             ...prevTask,
//             [name]: name === 'title' ? value : parseInt(value, 10) || 0
//         }));
//     };

//     // Sort tasks by priority in descending order
//     const sortTasks = (tasks) => {
//         return tasks.sort((a, b) => b.priority - a.priority);
//     };

//     return (
//         <div>
//             <Button variant="primary" onClick={() => setShowModal(true)}>Add New Task</Button>
//             {error && <p>{error}</p>}
//             <TaskList tasks={tasks} />
//             <TaskModal
//                 showModal={showModal}
//                 setShowModal={setShowModal}
//                 newTask={newTask}
//                 handleInputChange={handleInputChange}
//                 handleAddTask={handleAddTask}
//             />
//         </div>
//     );
// }

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
    const taskWithPriority = { title, urgency, importance, effort };

    const token = localStorage.getItem('token');
    try {
      const response = await axios.post('/api/tasks', taskWithPriority, {
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

