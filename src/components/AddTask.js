// src/components/AddTask.js
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios'; // Import Axios

const AddTask = ({ onAdd }) => {
    const [title, setTitle] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!title) return;
        try {
            const response = await axios.post('/api/tasks', { title }); // Make POST request
            onAdd(response.data); // Assuming the backend returns the created task object
            setTitle(''); // Clear input field
        } catch (error) {
            console.error('Error adding task:', error);
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
                Add Task
            </Button>
        </Form>
    );
};

export default AddTask;
