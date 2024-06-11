import React, { useState, useEffect } from 'react';

const EditTask = ({ task, saveTask, cancelEdit }) => {
  const [taskDetails, setTaskDetails] = useState({
    title: '',
    urgency: 1,
    importance: 1,
    effort: 1,
  });

  useEffect(() => {
    if (task) {
      setTaskDetails(task);
    }
  }, [task]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskDetails({
      ...taskDetails,
      [name]: name === 'title' ? value : Math.max(1, Math.min(parseInt(value, 10) || 1, 5)),
    });
  };

  const handleSaveClick = () => {
    saveTask(taskDetails);
  };

  return (
    <div className="edit-task-form">
      <input
        type="text"
        name="title"
        value={taskDetails.title}
        onChange={handleChange}
      />
      <input
        type="number"
        name="urgency"
        value={taskDetails.urgency}
        onChange={handleChange}
        min="1"
        max="5"
      />
      <input
        type="number"
        name="importance"
        value={taskDetails.importance}
        onChange={handleChange}
        min="1"
        max="5"
      />
      <input
        type="number"
        name="effort"
        value={taskDetails.effort}
        onChange={handleChange}
        min="1"
        max="5"
      />
      <button onClick={handleSaveClick}>Save</button>
      <button onClick={cancelEdit}>Cancel</button>
    </div>
  );
};

export default EditTask;

