const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    text: { type: String, required: true },
    completed: { type: Boolean, default: false },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }  // Optional: Link tasks to users
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;

