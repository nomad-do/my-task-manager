// import React from 'react';

// const TaskList = ({ tasks }) => {
//   return (
//     <div>
//       {tasks.map(task => (
//         <div key={task._id}> {/* Ensure each task has a unique key */}
//           <h3>{task.title}</h3>
//           <p>Urgency: {task.urgency}</p>
//           <p>Importance: {task.importance}</p>
//           <p>Effort: {task.effort}</p>
//           <p>Total Score: {task.priority}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default TaskList;


import React from 'react';

const TaskList = ({ tasks }) => {
  return (
    <div>
      <h1>Task List</h1>
      {tasks.map(task => {
        const priority = task.urgency + task.importance + task.effort;
        return (
          <div key={task._id}>
            <h3>{task.title}</h3>
            <p>Urgency: {task.urgency}</p>
            <p>Importance: {task.importance}</p>
            <p>Effort: {task.effort}</p>
            <p>Total Score: {priority}</p>
          </div>
        );
      })}
    </div>
  );
};

export default TaskList;

