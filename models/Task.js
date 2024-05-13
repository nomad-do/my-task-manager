const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    text: { type: String, required: true, unique: true, trim: true },  // Set 'unique' to true and trim to remove leading/trailing spaces
    completed: { type: Boolean, default: false },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }  // Link tasks to users
});

// Apply the unique index on the 'text' field
taskSchema.index({ text: 1 }, { unique: true });

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;

