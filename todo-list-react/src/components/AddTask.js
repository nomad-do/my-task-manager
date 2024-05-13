import React, { useState } from 'react';
import { Modal, Button, Alert, FormControl, Form } from 'react-bootstrap';
import Rating from './Rating';  // Ensure this is the correct import path

const AddTask = ({ onAddTask }) => {
    const [task, setTask] = useState({
        title: '',
        urgency: 1,  // Default score is set to 1
        importance: 1,  // Default score is set to 1
        effort: 1,  // Default score is set to 1
    });
    
    const [error, setError] = useState({});
    const [showModal, setShowModal] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setTask(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();  // Prevent the form from submitting the default way
    
        setError({});  // Clear previous errors
    
        try {
            const response = await fetch('/api/tasks', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(task)
            });
            const data = await response.json();
            if (!response.ok) {
                throw new Error(data.message || 'Failed to add task');
            }
    
            onAddTask(data);  // Update the parent component or state
            setShowModal(false);  // Close the modal
            setTask({ title: '', urgency: 1, importance: 1, effort: 1 });  // Reset the form to default values
        } catch (error) {
            console.error('Failed to add task:', error);
            setError({ form: error.message });
        }
    };
    
    return (
        <>
            <Button onClick={() => setShowModal(true)} className="mt-3">Add New Task</Button>

            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Add a New Task</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        {error.form && <Alert variant="danger">{error.form}</Alert>}
                        <Form.Group className="mb-3">
                            <Form.Label>Title</Form.Label>
                            <FormControl
                                type="text"
                                name="title"
                                placeholder="Enter task title"
                                value={task.title}
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                        <Rating label="Urgency" value={task.urgency} onRate={(value) => setTask({ ...task, urgency: value })} />
                        <Rating label="Importance" value={task.importance} onRate={(value) => setTask({ ...task, importance: value })} />
                        <Rating label="Effort" value={task.effort} onRate={(value) => setTask({ ...task, effort: value })} />

                        <Button variant="primary" type="submit">Save Task</Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default AddTask;

