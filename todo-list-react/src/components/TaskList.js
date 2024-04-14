// src/components/TaskList.js
import React from 'react';
import { ListGroup } from 'react-bootstrap';

const TaskList = ({ tasks }) => {
    return (
        <ListGroup>
            {tasks.map(task => (
                <ListGroup.Item key={task._id}>{task.title}</ListGroup.Item>
            ))}
        </ListGroup>
    );
};

export default TaskList;
