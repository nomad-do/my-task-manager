import React, { useState } from 'react';
import { Modal, Button, Alert, FormControl, Form } from 'react-bootstrap';
import Rating from './Rating'; // Ensure this is correctly importing

const AddTask = ({ onAddTask }) => {
    const [title, setTitle] = useState('');
    const [urgency, setUrgency] = useState(1);
    const [importance, setImportance] = useState(1);
    const [effort, setEffort] = useState(1);
    const [error, setError] = useState('');
    const [showModal, setShowModal] = useState(false);

    // Handles changes from the Rating component
    const handleRatingChange = (ratingType) => (value) => {
        switch (ratingType) {
            case 'urgency':
                setUrgency(value);
                break;
            case 'importance':
                setImportance(value);
                break;
            case 'effort':
                setEffort(value);
                break;
            default:
                break;
        }
    };

    const handleSubmit = async () => {
        if (!title.trim()) {
            setError('Please enter a title for the task.');
            return;
        }
        setError('');

        // Calculate total score
        const totalScore = urgency + importance + effort; // Ensure all are numbers
        const newTask = {
            title,
            urgency,
            importance,
            effort,
            totalScore  // Include the calculated total score
        };

        // Attempt to add the task and handle the result
        try {
            await onAddTask(newTask);
            setTitle('');
            setUrgency(1);
            setImportance(1);
            setEffort(1);
            setShowModal(false); // Close the modal after submitting the task
        } catch (error) {
            console.error('Failed to add task:', error);
            setError('Failed to add task. Please try again.');
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
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Title</Form.Label>
                            <FormControl
                                type="text"
                                placeholder="Enter task title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </Form.Group>
                        <Rating label="Urgency" value={urgency} onRate={handleRatingChange('urgency')} />
                        <Rating label="Importance" value={importance} onRate={handleRatingChange('importance')} />
                        <Rating label="Effort" value={effort} onRate={handleRatingChange('effort')} />
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>Close</Button>
                    <Button variant="primary" onClick={handleSubmit}>Save Task</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default AddTask;
