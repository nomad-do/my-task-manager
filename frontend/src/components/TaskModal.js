import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const TaskModal = ({ showModal, setShowModal, task, handleInputChange, handleSubmit, error }) => {
  return (
    <Modal show={showModal} onHide={() => setShowModal(false)}>
      <Modal.Header closeButton>
        <Modal.Title>{task._id ? 'Edit Task' : 'Add New Task'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              name="title"
              value={task.title}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Urgency</Form.Label>
            <Form.Control
              type="number"
              name="urgency"
              value={task.urgency}
              onChange={handleInputChange}
              min="1"
              max="5"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Importance</Form.Label>
            <Form.Control
              type="number"
              name="importance"
              value={task.importance}
              onChange={handleInputChange}
              min="1"
              max="5"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Effort</Form.Label>
            <Form.Control
              type="number"
              name="effort"
              value={task.effort}
              onChange={handleInputChange}
              min="1"
              max="5"
            />
          </Form.Group>
        </Form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShowModal(false)}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          {task._id ? 'Update Task' : 'Add Task'}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default TaskModal;
