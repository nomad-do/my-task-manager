import React from 'react';
import TaskTableHeader from './TaskTableHeader';

const TaskList = ({ tasks, onDeleteTask, onEditClick }) => (
  <table style={{ width: '100%', textAlign: 'left' }}>
    <TaskTableHeader />
    <tbody>
      {tasks.map((task) => (
        <tr key={task._id}>
          <td>{task.title}</td>
          <td>{task.urgency}</td>
          <td>{task.importance}</td>
          <td>{task.effort}</td>
          <td>{task.total_score}</td>
          <td>
            <button onClick={() => onEditClick(task)}>Edit</button>
            <button onClick={() => onDeleteTask(task._id)}>Delete</button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default TaskList;
