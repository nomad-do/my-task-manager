// import React, { useState, useEffect } from 'react';
// import { v4 as uuidv4 } from 'uuid';
// import TaskList from './components/TaskList';
// import AddTask from './components/AddTask';
// import 'bootstrap/dist/css/bootstrap.min.css';

// function App() {
//   const [tasks, setTasks] = useState([]);
//   const [newTaskTitle, setNewTaskTitle] = useState('');
//   const [newTaskDescription, setNewTaskDescription] = useState('');

//   // Fetch tasks from an API or initialize tasks here if needed
//   useEffect(() => {
//     // Fetch tasks from an API and set tasks
//     // Example:
//     // fetch('api/task/url')
//     //   .then(response => response.json())
//     //   .then(data => setTasks(data))
//     //   .catch(error => console.error('Error fetching tasks:', error));

//     // For now, initializing with no tasks:
//     setTasks([]);
//   }, []);

//   const handleRatingChange = (taskId, newRating) => {
//     setTasks(currentTasks => currentTasks.map(task => {
//       if (task._id === taskId) {
//         return { ...task, rating: newRating };
//       }
//       return task;
//     }));
//   };

//   const handleAddTask = () => {
//     const newTask = {
//       _id: uuidv4(),
//       title: newTaskTitle,
//       description: newTaskDescription,
//       rating: 0,
//     };

//     setTasks(currentTasks => [...currentTasks, newTask]);
//     setNewTaskTitle('');
//     setNewTaskDescription('');
//   };

//   return (
//     <div className="container">
//       <h1>To-Do List</h1>
//       <input
//         type="text"
//         placeholder="New task title"
//         value={newTaskTitle}
//         onChange={(e) => setNewTaskTitle(e.target.value)}
//       />
//       <input
//         type="text"
//         placeholder="New task description"
//         value={newTaskDescription}
//         onChange={(e) => setNewTaskDescription(e.target.value)}
//       />
//       <button onClick={handleAddTask}>Add Task</button>
//       <TaskList tasks={tasks} onRate={handleRatingChange} />
//     </div>
//   );
// }

// export default App;

import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList';  // Ensure this import is correct
import AddTask from './components/AddTask';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  // State to store the list of tasks
  const [tasks, setTasks] = useState([]);

  // Function to calculate the priority of a task
  const calculatePriority = (task) => {
    return (task.urgency + task.importance + task.effort) / 3;
  };

  // Function to handle adding a new task
  const handleAddTask = (newTask) => {
    const taskWithPriority = {
      ...newTask,
      _id: Date.now(),  // Add unique _id for key purposes
      priority: calculatePriority(newTask)  // Calculate priority when adding
    };
    setTasks(prevTasks => [...prevTasks, taskWithPriority]);
    console.log('Adding task:', taskWithPriority);
  };

  // Effect to sort tasks by priority
  useEffect(() => {
    const sortedTasks = [...tasks].sort((a, b) => b.priority - a.priority);
    setTasks(sortedTasks);
  }, [tasks]);

  return (
    <div className="container">
      <h1>My Task Manager</h1>
      <AddTask onAddTask={handleAddTask} />
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
