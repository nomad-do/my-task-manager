import React, { useState } from 'react';

const EditTask = ({ task, saveTask, cancelEdit }) => {
  const [taskDetails, setTaskDetails] = useState(task);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskDetails({
      ...taskDetails,
      [name]: name === 'completed' ? e.target.checked : value, // Handling checkbox for completed field
    });
  };

  const handleSaveClick = () => {
    saveTask(taskDetails);
  };

  return (
    <div className="edit-task-form">
      <input
        type="text"
        name="text"
        value={taskDetails.text}
        onChange={handleChange}
      />
      <input
        type="checkbox"
        name="completed"
        checked={taskDetails.completed}
        onChange={handleChange}
      />
      <label>Completed</label>
      <button onClick={handleSaveClick}>Save</button>
      <button onClick={cancelEdit}>Cancel</button>
    </div>
  );
};

export default EditTask;
