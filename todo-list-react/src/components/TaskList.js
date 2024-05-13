import React from 'react';

const TaskList = ({ tasks }) => {
    console.log(tasks);
    return (
        <div className="task-list">
            {tasks.map((task, index) => (
                <div key={task.id || index} className={`task-item ${task.priority === 1 ? 'highlight' : ''}`}>
                    <h3>{task.title}</h3>
                    <div className="task-values">
                        <p>Urgency: {task.urgency}</p>
                        <p>Importance: {task.importance}</p>
                        <p>Effort: {task.effort}</p>
                    </div>
                    <p>Total Score: {task.urgency + task.importance + task.effort}</p>
                </div>
            ))}
        </div>
    );
};

export default TaskList;
