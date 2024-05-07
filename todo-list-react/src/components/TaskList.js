import React from 'react';

const TaskList = ({ tasks }) => {
    // Assuming 'tasks' is already sorted based on priority
    return (
        <div className="task-list">
            {tasks.map((task, index) => (
                <div key={task._id} className={`task-item ${index === 0 ? 'highlight' : ''}`}>
                    <div>{task.title} - Total Score: {task.priority}</div>
                    <div className="task-details">
                        Urgency: {task.urgency}, Importance: {task.importance}, Effort: {task.effort}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TaskList;
