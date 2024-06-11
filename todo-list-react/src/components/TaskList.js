import React, { useState } from 'react';
import EditTask from './EditTask';

const TaskList = ({ tasks, updateTask, deleteTask }) => {
  const [editingTask, setEditingTask] = useState(null);

  const startEdit = (task) => {
    setEditingTask(task);
  };

  const saveTask = (updatedTask) => {
    updateTask(updatedTask);
    setEditingTask(null); // Exit edit mode
  };

  const cancelEdit = () => {
    setEditingTask(null); // Exit edit mode
  };

  return (
    <div>
      <h1>Task List</h1>
      {tasks.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>Task Name</th>
              <th>Urgency</th>
              <th>Importance</th>
              <th>Effort</th>
              <th>Total Score</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map(task => (
              <tr key={task._id}>
                {editingTask && editingTask._id === task._id ? (
                  <td colSpan="6">
                    <EditTask task={task} saveTask={saveTask} cancelEdit={cancelEdit} />
                  </td>
                ) : (
                  <>
                    <td>{task.title}</td>
                    <td>{task.urgency}</td>
                    <td>{task.importance}</td>
                    <td>{task.effort}</td>
                    <td>{task.urgency + task.importance + task.effort}</td>
                    <td>
                      <button onClick={() => startEdit(task)}>Edit</button>
                      <button onClick={() => deleteTask(task._id)}>Delete</button>
                    </td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TaskList;

