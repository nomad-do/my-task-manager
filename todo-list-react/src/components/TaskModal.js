// TaskModal.js
import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import InputField from './InputField';  // Ensure this is used for the Title field only
import Rating from './Rating';  // Make sure this import path is correct

const TaskModal = ({ showModal, setShowModal, newTask, handleInputChange, handleAddTask }) => {
  return (
    <Modal show={showModal} onHide={() => setShowModal(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Add a New Task</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          {/* Title Input Field */}
          <InputField
            key="title"
            label="Title"
            name="title"
            type="text"
            value={newTask.title}
            onChange={handleInputChange}
          />

          {/* Rating Components for Urgency, Importance, and Effort */}
          <Rating
            label="Urgency"
            value={newTask.urgency}
            onRate={value => handleInputChange({ target: { name: 'urgency', value } })}
          />
          <Rating
            label="Importance"
            value={newTask.importance}
            onRate={value => handleInputChange({ target: { name: 'importance', value } })}
          />
          <Rating
            label="Effort"
            value={newTask.effort}
            onRate={value => handleInputChange({ target: { name: 'effort', value } })}
          />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShowModal(false)}>Close</Button>
        <Button variant="primary" onClick={handleAddTask}>Save Task</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default TaskModal;
