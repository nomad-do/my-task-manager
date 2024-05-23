// TaskList.js
import React from 'react';
import { ListGroup } from 'react-bootstrap';

const TaskList = ({ tasks }) => {
    return (
        <ListGroup>
            {tasks.map(task => (
                <ListGroup.Item key={task._id}>
                    {task.title} - Urgency: {task.urgency} - Importance: {task.importance} - Effort: {task.effort} - Priority: {task.priority}
                </ListGroup.Item>
            ))}
        </ListGroup>
    );
};

export default TaskList;
