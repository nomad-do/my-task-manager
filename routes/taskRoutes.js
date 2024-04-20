const express = require('express');
const router = express.Router();
const Task = require('../models/Task');// Correct the path if necessary and ensure it points to Task model

// GET all tasks
router.get('/tasks', async (req, res) => {
    try {
        const tasks = await Task.find();
        res.json(tasks);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// POST a new task
router.post('/tasks', async (req, res) => {
    const task = new Task({
        text: req.body.text
    });
    try {
        const newTask = await task.save();
        res.status(201).json(newTask);
    } catch (error) {
        res.status(400).send(error.message);
    }
});

module.exports = router;
