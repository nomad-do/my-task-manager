import { useState } from "react";
import EditTask from "./EditTask";

function TaskDetails({ task, updateTask }) {
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
          <p>
            <strong>Task Name:</strong> {task.title}
          </p>
          <p>
            <strong>Urgency:</strong> {task.urgency}
          </p>
          <p>
            <strong>Importance:</strong> {task.importance}
          </p>
          <p>
            <strong>Effort:</strong> {task.effort}
          </p>
          <p>
            <strong>Total Score:</strong> {task.urgency + task.importance + task.effort}
          </p>
          <button type="button" onClick={handleEditClick}>Edit</button>
        </div>
      )}
    </div>
  );
}

export default TaskDetails;
