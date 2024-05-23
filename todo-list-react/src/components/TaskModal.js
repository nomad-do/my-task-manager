// TaskModal.js
import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const TaskModal = ({ showModal, setShowModal, newTask, handleInputChange, handleAddTask }) => {
    return (
        <Modal show={showModal} onHide={() => setShowModal(false)}>
            <Modal.Header closeButton>
                <Modal.Title>My-Task-Manager</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <div style={{ marginTop: '30px' }}></div> {/* Adds space above the title */}
                    <Form.Group controlId="formTaskTitle">
                        <Form.Label>Title</Form.Label>
                        <Form.Control
                            type="text"
                            name="title"
                            value={newTask.title}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="formTaskUrgency">
                        <Form.Label>Urgency</Form.Label>
                        <Form.Control
                            type="number"
                            name="urgency"
                            value={newTask.urgency}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="formTaskImportance">
                        <Form.Label>Importance</Form.Label>
                        <Form.Control
                            type="number"
                            name="importance"
                            value={newTask.importance}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="formTaskEffort">
                        <Form.Label>Effort</Form.Label>
                        <Form.Control
                            type="number"
                            name="effort"
                            value={newTask.effort}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => setShowModal(false)}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleAddTask}>
                    Add Task
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default TaskModal;
