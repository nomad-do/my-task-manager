import React from 'react';
import { ListGroup, Alert } from 'react-bootstrap';
import TaskDetails from './TaskDetails';
import Rating from './Rating';

const TaskList = ({ tasks, onValueChange, onRate }) => {
    // Display a message if there are no tasks
    if (tasks.length === 0) {
        return <Alert variant="info">No tasks to display.</Alert>;
    }

    return (
        <ListGroup>
            {tasks.map(task => (
                <ListGroup.Item key={task._id} className="d-flex justify-content-between align-items-center">
                    <TaskDetails task={task} onValueChange={onValueChange} />
                    <Rating 
                        value={task.priority} 
                        onRate={(rating) => onRate(task._id, rating)}
                    />
                </ListGroup.Item>
            ))}
        </ListGroup>
    );
};

export default TaskList;
