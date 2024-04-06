// controllers/taskController.js
const Task = require('../models/Task');

exports.createTask = async (req, res) => {
    try {
        const { title } = req.body;
        const newTask = await Task.create({ title });
        res.status(201).json(newTask);
    } catch (error) {
        console.error('Error creating task:', error);
        res.status(500).json({ error: 'Server error' });
    }
};

exports.getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find();
        res.status(200).json(tasks);
    } catch (error) {
        console.error('Error fetching tasks:', error);
        res.status(500).json({ error: 'Server error' });
    }
};

// Implement other controller functions for fetching, updating, and deleting tasks
