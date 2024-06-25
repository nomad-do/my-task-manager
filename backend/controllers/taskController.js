const Task = require('../models/Task');

exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ user: req.user.userId }).populate('user');
    res.status(200).json(tasks);
  } catch (err) {
    console.error('Error fetching tasks:', err); 
    res.status(500).json({ message: "An error occurred fetching tasks." });
  }
};

exports.createTask = async (req, res) => {
  const { title, urgency, importance, effort } = req.body;
  if (!title || urgency == null || importance == null || effort == null) {
    return res.status(400).json({ message: 'All fields must be filled: title, urgency, importance, and effort.' });
  }

  const task = new Task({
    title,
    urgency,
    importance,
    effort,
    priority: urgency + importance + effort,
    user: req.user.userId
  });

  try {
    const newTask = await task.save();
    res.status(201).json(newTask);
  } catch (err) {
    console.error('Error creating task:', err); 
    res.status(500).json({ message: "An error occurred during task creation." });
  }
};

exports.updateTask = async (req, res) => {
  const { title, urgency, importance, effort } = req.body;

  if (!title || urgency == null || importance == null || effort == null) {
    return res.status(400).json({ message: 'All fields must be filled: title, urgency, importance, and effort.' });
  }

  try {
    const task = await Task.findById(req.params.id);
    if (!task) {
      return res.status(404).json({ message: "Task not found." });
    }

    task.title = title;
    task.urgency = urgency;
    task.importance = importance;
    task.effort = effort;
    task.priority = urgency + importance + effort;

    const updatedTask = await task.save();

    res.status(200).json(updatedTask);
  } catch (err) {
    console.error('Error updating task:', err); 
    res.status(500).json({ message: "An error occurred during task update." });
  }
};

exports.deleteTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) {
      return res.status(404).json({ message: 'Task not found.' });
    }
    res.status(200).json({ message: 'Task deleted successfully' });
  } catch (err) {
    console.error('Error deleting task:', err); 
    res.status(500).json({ message: "An error occurred during task deletion." });
  }
};
