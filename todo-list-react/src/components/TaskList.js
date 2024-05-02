import React from 'react';

const TaskList = ({ tasks }) => {
    // Create a new sorted array to avoid mutating the original tasks array directly
    const sortedTasks = [...tasks].sort((a, b) => b.priority - a.priority); // Assuming higher priority number should be first

    return (
        <div>
            {sortedTasks.map(task => (
                <div key={task._id}>
                    <h3>{task.title} - Total Score: {task.priority}</h3>
                    <p>Urgency: {task.urgency}, Importance: {task.importance}, Effort: {task.effort}</p>
                </div>
            ))}
        </div>
    );
};

export default TaskList;
