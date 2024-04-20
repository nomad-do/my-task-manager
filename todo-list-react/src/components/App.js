// src/App.js
import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        // Fetch tasks from the backend API
        fetchTasks();
    }, []);

    const fetchTasks = async () => {
        // Existing fetching logic...
    };

    // Function to calculate the priority based on urgency, importance, and effort
    const calculatePriority = (urgency, importance, effort) => {
        // Simple average calculation for priority, you can adjust the calculation as needed
        return Math.round((urgency + importance + effort) / 3);
    };

    const handleValueChange = async (taskId, attr, value) => {
        // Parse the new value to ensure it's a number
        const newValue = parseInt(value, 10);

        // Update tasks state and recalculate priority if necessary
        setTasks(currentTasks => {
            return currentTasks.map(task => {
                if (task._id === taskId) {
                    const updatedTask = { ...task, [attr]: newValue };
                    // Recalculate priority if one of the priority-affecting attributes changed
                    if (['urgency', 'importance', 'effort'].includes(attr)) {
                        updatedTask.priority = calculatePriority(
                            updatedTask.urgency, 
                            updatedTask.importance, 
                            updatedTask.effort
                        );
                    }
                    return updatedTask;
                }
                return task;
            });
        });

        // Update the backend, as you have in your existing code
        // ...

    };

    return (
        <div className="container">
            <h1>To-Do List</h1>
            <TaskList tasks={tasks} onValueChange={handleValueChange} />
        </div>
    );
}

export default App;
