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
        const apiUrl = process.env.REACT_APP_API_URL;  // Using the environment variable
        try {
            const response = await fetch(`${apiUrl}/tasks`); // Modified to use apiUrl variable
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