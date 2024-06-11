import React, { useState } from 'react';
import EditTask from './EditTask';

const TaskDetails = ({ task, updateTask }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = (updatedTask) => {
    updateTask(updatedTask);
    setIsEditing(false);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
  };

  return (
    <div className="task">
      {isEditing ? (
        <EditTask task={task} saveTask={handleSaveClick} cancelEdit={handleCancelClick} />
      ) : (
        <div className="task-details">
          <p>Task Name: {task.title}</p>
          <p>Urgency: {task.urgency}</p>
          <p>Importance: {task.importance}</p>
          <p>Effort: {task.effort}</p>
          <p>Total Score: {task.urgency + task.importance + task.effort}</p>
          <button onClick={handleEditClick}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default TaskDetails;
