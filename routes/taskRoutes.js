const express = require('express');
const router = express.Router();

// Mock task data
const tasks = [
    { id: 1, title: 'Task 1', description: 'Complete the report.', rating: 4 },
    { id: 2, title: 'Task 2', description: 'Meet with the team.', rating: 5 }
];

// Validation middleware
const validateTask = (req, res, next) => {
    const { title, description, rating } = req.body;

    // Check if fields are provided
    if (!title || !description || rating == null) {
        return res.status(400).json({ message: 'All fields must be filled: title, description, and rating.' });
    }

    // Check if rating is a valid number
    if (typeof rating !== 'number' || rating < 1 || rating > 5) {
        return res.status(400).json({ message: 'Rating must be a number between 1 and 5.' });
    }

    next();
};

// GET all tasks - using mock data
router.get('/', async (req, res) => {
    res.json(tasks); // Send mock data instead of querying the database
});

// POST a new task - simulation with mock data (not saving to database)
router.post('/', validateTask, async (req, res) => {
    const { title, description, rating } = req.body;

    // Check for duplicate titles
    const duplicate = tasks.find(task => task.title.trim().toLowerCase() === title.trim().toLowerCase());
    if (duplicate) {
        return res.status(409).json({ message: 'A task with the same title already exists.' });
    }

    const newTask = {
        id: tasks.length + 1, // Simple increment to manage IDs
        title,
        description,
        rating
    };

    tasks.push(newTask); // This adds a new task to the array
    res.status(201).json(newTask);
});

module.exports = router;
