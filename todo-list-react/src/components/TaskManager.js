// TaskManager.js
import React, { useState } from 'react';
import TaskList from './TaskList';
import TaskModal from './TaskModal';
import { Button } from 'react-bootstrap';

const TaskManager = () => {
    const [tasks, setTasks] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [newTask, setNewTask] = useState({ title: '', urgency: 1, importance: 1, effort: 1 });

    const calculatePriority = (urgency, importance, effort) => {
        return urgency + importance + effort;
    };

    const handleAddTask = () => {
        const { urgency, importance, effort, title } = newTask;
        const totalScore = calculatePriority(urgency, importance, effort);
        const taskWithPriority = {
            title,
            urgency,
            importance,
            effort,
            _id: Date.now(),
            priority: totalScore
        };

        // Update tasks state with sorted tasks
        setTasks(prevTasks => sortTasks([...prevTasks, taskWithPriority]));

        // Reset form and hide modal
        setShowModal(false);
        setNewTask({ title: '', urgency: 1, importance: 1, effort: 1 });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewTask(prevTask => ({
            ...prevTask,
            [name]: name === 'title' ? value : parseInt(value, 10) || 0
        }));
    };

    // Sort tasks by priority in descending order
    const sortTasks = (tasks) => {
        return tasks.sort((a, b) => b.priority - a.priority);
    };

    return (
        <div>
            <Button variant="primary" onClick={() => setShowModal(true)}>Add New Task</Button>
            <TaskList tasks={tasks} />
            <TaskModal
                showModal={showModal}
                setShowModal={setShowModal}
                newTask={newTask}
                handleInputChange={handleInputChange}
                handleAddTask={handleAddTask}
            />
        </div>
    );
}

export default TaskManager;
