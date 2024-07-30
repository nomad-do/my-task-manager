const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  urgency: { type: Number, required: true },
  importance: { type: Number, required: true },
  effort: { type: Number, required: true },
  priority: { type: Number, required: true },
  total_score: { type: Number, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  createdAt: { type: Date, default: Date.now }
});

// Pre-save hook to calculate total_score and priority if not provided
taskSchema.pre('save', function (next) {
  if (!this.total_score) {
    this.total_score = this.urgency + this.importance + this.effort;
  }
  if (!this.priority) {
    this.priority = this.total_score;
  }
  next();
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
