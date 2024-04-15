const express = require('express');
const router = express.Router();
const Todo = require('../models/Todo');

// GET all todos
router.get('/todos', async (req, res) => {
    try {
        const todos = await Todo.find();
        res.json(todos);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// POST a new todo
router.post('/todos', async (req, res) => {
    const todo = new Todo({
        text: req.body.text
    });
    try {
        const newTodo = await todo.save();
        res.status(201).json(newTodo);
    } catch (error) {
        res.status(400).send(error.message);
    }
});

module.exports = router;
