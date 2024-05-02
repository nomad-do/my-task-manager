// src/components/EditTask.js
import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import axios from 'axios'; // Import Axios

const EditTask = ({ task, onUpdate }) => {
    const [title, setTitle] = useState(task.title);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!title) return;
        try {
            const response = await axios.put(`/api/tasks/${task.id}`, { title }); // Make PUT request
            onUpdate(response.data); // Update task in parent component
        } catch (error) {
            console.error('Error updating task:', error);
        }
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Enter task"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </Form.Group>
            <Button variant="primary" type="submit">
                Update Task
            </Button>
        </Form>
    );
};

export default EditTask;
