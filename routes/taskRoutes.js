const express = require('express');
const router = express.Router();

// Mock task data
const tasks = [
    { id: 1, title: 'Task 1', description: 'Complete the report.', rating: 4 },
    { id: 2, title: 'Task 2', description: 'Meet with the team.', rating: 5 }
];

// GET all tasks - using mock data
router.get('/', async (req, res) => {
    res.json(tasks); // Send mock data instead of querying the database
});

// POST a new task - simulation with mock data (not saving to database)
router.post('/', async (req, res) => {
    const { title, description, rating } = req.body; // Assume these fields are in request
    const newTask = {
        id: tasks.length + 1, // Simple ID assignment
        title,
        description,
        rating
    };
    tasks.push(newTask); // Add to mock array (not persistent)
    res.status(201).json(newTask);
});

module.exports = router;
