import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import axios from 'axios';

const AddTask = ({ onAdd }) => {
    const [title, setTitle] = useState('');
    const [error, setError] = useState(''); // State to handle any error message
    const [isSubmitting, setIsSubmitting] = useState(false); // State to handle the submit button

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!title) {
            setError('Title cannot be empty.'); // Set error state if title is empty
            return;
        }

        setIsSubmitting(true); // Disable the submit button to prevent multiple submissions
        try {
            const response = await axios.post('/api/tasks', { title });
            onAdd(response.data);
            setTitle('');
            setError(''); // Clear any previous errors
        } catch (error) {
            setError('Failed to add task. Please try again.'); // Set error state if request fails
            console.error('Error adding task:', error);
        }
        setIsSubmitting(false); // Re-enable the submit button
    };

    return (
        <>
            {error && <Alert variant="danger">{error}</Alert>} {/* Display an error message if error state is set */}
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Control
                        type="text"
                        placeholder="Enter task"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </Form.Group>
                <Button variant="primary" type="submit" disabled={isSubmitting}>
                    Add Task
                </Button>
            </Form>
        </>
    );
};

export default AddTask;
