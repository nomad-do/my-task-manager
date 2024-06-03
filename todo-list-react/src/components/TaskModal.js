// import React from 'react';
// import { Modal, Button, FormControl, Form } from 'react-bootstrap';

// const TaskModal = ({ showModal, setShowModal, newTask, handleInputChange, handleAddTask, error }) => {
//   return (
//     <Modal show={showModal} onHide={() => setShowModal(false)}>
//       <Modal.Header closeButton>
//         <Modal.Title>Add a New Task</Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <Form onSubmit={(e) => { e.preventDefault(); handleAddTask(); }}>
//           {error && <p style={{ color: 'red' }}>{error}</p>}
//           <Form.Group className="mb-3">
//             <Form.Label>Title</Form.Label>
//             <FormControl
//               type="text"
//               name="title"
//               placeholder="Enter task title"
//               value={newTask.title}
//               onChange={handleInputChange}
//             />
//           </Form.Group>
//           <Form.Group className="mb-3">
//             <Form.Label>Urgency</Form.Label>
//             <FormControl
//               type="number"
//               name="urgency"
//               placeholder="Enter urgency (1-5)"
//               value={newTask.urgency}
//               onChange={handleInputChange}
//               min="1"
//               max="5"
//             />
//           </Form.Group>
//           <Form.Group className="mb-3">
//             <Form.Label>Importance</Form.Label>
//             <FormControl
//               type="number"
//               name="importance"
//               placeholder="Enter importance (1-5)"
//               value={newTask.importance}
//               onChange={handleInputChange}
//               min="1"
//               max="5"
//             />
//           </Form.Group>
//           <Form.Group className="mb-3">
//             <Form.Label>Effort</Form.Label>
//             <FormControl
//               type="number"
//               name="effort"
//               placeholder="Enter effort (1-5)"
//               value={newTask.effort}
//               onChange={handleInputChange}
//               min="1"
//               max="5"
//             />
//           </Form.Group>
//           <Button variant="primary" type="submit">Save Task</Button>
//         </Form>
//       </Modal.Body>
//       <Modal.Footer>
//         <Button variant="secondary" onClick={() => setShowModal(false)}>Close</Button>
//       </Modal.Footer>
//     </Modal>
//   );
// };

// export default TaskModal;



import React from 'react';
import { Modal, Button, Alert, FormControl, Form } from 'react-bootstrap';
import Rating from './Rating';

const TaskModal = ({ showModal, setShowModal, newTask, handleInputChange, handleAddTask, error }) => {
  return (
    <Modal show={showModal} onHide={() => setShowModal(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Add a New Task</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={(e) => { e.preventDefault(); handleAddTask(); }}>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <FormControl
              type="text"
              name="title"
              placeholder="Enter task title"
              value={newTask.title}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Rating label="Urgency" value={newTask.urgency} onRate={(value) => handleInputChange({ target: { name: 'urgency', value } })} />
          <Rating label="Importance" value={newTask.importance} onRate={(value) => handleInputChange({ target: { name: 'importance', value } })} />
          <Rating label="Effort" value={newTask.effort} onRate={(value) => handleInputChange({ target: { name: 'effort', value } })} />
          <Button variant="primary" type="submit">Save Task</Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShowModal(false)}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default TaskModal;
