// src/App.js
import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        // Fetch tasks from backend API
        fetchTasks();
    }, []);

    const fetchTasks = async () => {
        try {
            const response = await fetch('http://localhost:3001/api/tasks');
            if (response.ok) {
                const data = await response.json();
                setTasks(data);
            }
        } catch (error) {
            console.error('Error fetching tasks:', error);
        }
    };

    return (
        <div className="container">
            <h1>To-Do List</h1>
            <TaskList tasks={tasks} />
        </div>
    );
}

export default App;
