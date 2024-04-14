// src/components/TaskDetails.js
import React from 'react';
import { Card } from 'react-bootstrap';

const TaskDetails = ({ task }) => {
    return (
        <Card>
            <Card.Body>
                <Card.Title>{task.title}</Card.Title>
                {/* Add more task details here if needed */}
            </Card.Body>
        </Card>
    );
};

export default TaskDetails;
