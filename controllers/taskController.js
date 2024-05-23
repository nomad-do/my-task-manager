const Task = require('../models/Task');

exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.find().populate('user');
    res.status(200).json(tasks); // Ensure to always specify the status code explicitly
  } catch (err) {
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
    user: req.user.userId // Attach the authenticated user to the task
  });

  try {
    const newTask = await task.save();
    res.status(201).json({
      title: newTask.title,
      urgency: newTask.urgency,
      importance: newTask.importance,
      effort: newTask.effort,
      priority: newTask.priority,
      user: newTask.user
    }); // Match the structure as described in the API documentation
  } catch (err) {
    res.status(500).json({ message: "An error occurred during task creation." });
  }
};

exports.updateTask = async (req, res) => {
  const { title, urgency, importance, effort } = req.body;

  if (!title || urgency == null || importance == null || effort == null) {
    return res.status(400).json({ message: 'All fields must be filled: title, urgency, importance, and effort.' });
  }

  try {
    // Find the task by ID first
    const task = await Task.findById(req.params.id);
    if (!task) {
      return res.status(404).json({ message: "Task not found." });
    }

    // Update the task fields
    task.title = title;
    task.urgency = urgency;
    task.importance = importance;
    task.effort = effort;
    task.priority = urgency + importance + effort;
    task.user = req.user.userId; // Ensure the user remains attached to the task

    // Save the updated task
    const updatedTask = await task.save();

    res.status(200).json({
      title: updatedTask.title,
      urgency: updatedTask.urgency,
      importance: updatedTask.importance,
      effort: updatedTask.effort,
      priority: updatedTask.priority,
      user: updatedTask.user
    });
  } catch (err) {
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
    res.status(500).json({ message: "An error occurred during task deletion." });
  }
};
