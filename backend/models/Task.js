const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define your schema
const taskSchema = new Schema({
  title: { type: String, required: true },
  urgency: { type: Number, required: true },
  importance: { type: Number, required: true },
  effort: { type: Number, required: true },
  priority: { type: Number, required: true },
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true }
});

// Check if the model already exists to avoid OverwriteModelError
const Task = mongoose.models.Task || mongoose.model('Task', taskSchema);

module.exports = Task;
