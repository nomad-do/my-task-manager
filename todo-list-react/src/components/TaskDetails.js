// src/components/TaskDetails.js
import React from 'react';
import Rating from './Rating'; // Import the Rating component
// ... other imports if necessary

const TaskDetails = ({ task, onValueChange }) => {
  const handleRatingChange = (ratingType, value) => {
    // Call the onValueChange prop with the task ID, the rating type, and the new value
    onValueChange(task._id, ratingType, value);
  };

  return (
    // Existing card layout
    <div className="task-item">
      <span>{task.title}</span>
      {/* Include the Rating component for each priority aspect */}
      <Rating value={task.urgency} onRate={(value) => handleRatingChange('urgency', value)} />
      <Rating value={task.importance} onRate={(value) => handleRatingChange('importance', value)} />
      <Rating value={task.effort} onRate={(value) => handleRatingChange('effort', value)} />
    </div>
    // ... more code if needed
  );
};

export default TaskDetails;
