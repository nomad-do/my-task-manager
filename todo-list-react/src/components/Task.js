import React, { useState } from 'react';

const Task = ({ task, updateTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [taskDetails, setTaskDetails] = useState(task);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    updateTask(taskDetails);
    setIsEditing(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskDetails({
      ...taskDetails,
      [name]: value,
    });
  };

  return (
    <div className="task">
      {isEditing ? (
        <div className="edit-task-form">
          <input
            type="text"
            name="name"
            value={taskDetails.name}
            onChange={handleChange}
          />
          <input
            type="number"
            name="urgency"
            value={taskDetails.urgency}
            onChange={handleChange}
          />
          <input
            type="number"
            name="importance"
            value={taskDetails.importance}
            onChange={handleChange}
          />
          <input
            type="number"
            name="effort"
            value={taskDetails.effort}
            onChange={handleChange}
          />
          <button onClick={handleSaveClick}>Save</button>
        </div>
      ) : (
        <div className="task-details">
          <p>Task Name: {taskDetails.name}</p>
          <p>Urgency: {taskDetails.urgency}</p>
          <p>Importance: {taskDetails.importance}</p>
          <p>Effort: {taskDetails.effort}</p>
          <p>Total Score: {taskDetails.urgency + taskDetails.importance + taskDetails.effort}</p>
        </div>
      )}
      <button onClick={handleEditClick}>Edit</button>
    </div>
  );
};

export default Task;
