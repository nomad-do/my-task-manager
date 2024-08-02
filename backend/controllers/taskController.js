const Task = require('../models/Task');

exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ userId: req.user._id });
    res.json(tasks);
  } catch (error) {
    console.error('Error fetching tasks:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.createTask = async (req, res) => {
  const { title, urgency, importance, effort } = req.body;
  const total_score = urgency + importance + effort;
  const priority = total_score; 

  try {
    const newTask = new Task({ 
      title, 
      urgency, 
      importance, 
      effort, 
      priority, 
      total_score, 
      userId: req.user._id 
    });
    await newTask.save();
    res.status(201).json(newTask);
  } catch (error) {
    console.error('Error creating task:', error);
    res.status(500).json({ message: 'Server error', details: error });
  }
};

exports.updateTask = async (req, res) => {
  const { taskId } = req.params;
  const { title, urgency, importance, effort } = req.body;
  const total_score = urgency + importance + effort;
  const priority = total_score; // Ensure priority is set for backward compatibility

  try {
    const updatedTask = await Task.findByIdAndUpdate(
      taskId,
      { title, urgency, importance, effort, priority, total_score },
      { new: true }
    );
    res.json(updatedTask);
  } catch (error) {
    console.error('Error updating task:', error);
    res.status(500).json({ message: 'Server error', details: error });
  }
};

exports.deleteTask = async (req, res) => {
  const { taskId } = req.params;
  try {
    await Task.findByIdAndDelete(taskId);
    res.status(204).end();
  } catch (error) {
    console.error('Error deleting task:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

