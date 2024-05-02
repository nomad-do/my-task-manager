// src/components/TaskDetails.js
import React from 'react';
import { Card } from 'react-bootstrap'; // Importing Card from react-bootstrap
import Rating from './Rating'; // Assuming you have a Rating component for the task details

const TaskDetails = ({ task, onValueChange }) => {
  return (
    <Card className="mb-3">
      <Card.Body>
        <Card.Title>{task.title}</Card.Title>
        <Rating value={task.urgency} onRate={(value) => onValueChange(task._id, 'urgency', value)} />
        <Rating value={task.importance} onRate={(value) => onValueChange(task._id, 'importance', value)} />
        <Rating value={task.effort} onRate={(value) => onValueChange(task._id, 'effort', value)} />
      </Card.Body>
    </Card>
  );
};

export default TaskDetails;
