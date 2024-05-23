const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');
const authenticateToken = require('../middlewares/authenticateToken');

const validateTask = (req, res, next) => {
  const { title, urgency, importance, effort } = req.body;
  if (!title || urgency == null || importance == null || effort == null) {
    return res.status(400).json({ message: 'All fields must be filled: title, urgency, importance, and effort.' });
  }
  next();
};

router.get('/', authenticateToken, (req, res) => {
  taskController.getTasks(req, res);
});

router.post('/', authenticateToken, validateTask, (req, res) => {
  taskController.createTask(req, res);
});

router.put('/:id', authenticateToken, validateTask, (req, res) => {
  taskController.updateTask(req, res);
});

router.delete('/:id', authenticateToken, (req, res) => {
  taskController.deleteTask(req, res);
});

module.exports = router;
