// import React, { useState } from 'react';
// import { Form, Button, Alert } from 'react-bootstrap';
// import axios from 'axios';

// const AddTask = ({ onAdd }) => {
//     const [title, setTitle] = useState('');
//     const [error, setError] = useState(''); // State to handle any error message
//     const [isSubmitting, setIsSubmitting] = useState(false); // State to handle the submit button

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         if (!title) {
//             setError('Title cannot be empty.'); // Set error state if title is empty
//             return;
//         }

//         setIsSubmitting(true); // Disable the submit button to prevent multiple submissions
//         try {
//             const response = await axios.post('/api/tasks', { title });
//             onAdd(response.data);
//             setTitle('');
//             setError(''); // Clear any previous errors
//         } catch (error) {
//             setError('Failed to add task. Please try again.'); // Set error state if request fails
//             console.error('Error adding task:', error);
//         }
//         setIsSubmitting(false); // Re-enable the submit button
//     };

//     return (
//         <>
//             {error && <Alert variant="danger">{error}</Alert>} {/* Display an error message if error state is set */}
//             <Form onSubmit={handleSubmit}>
//                 <Form.Group>
//                     <Form.Control
//                         type="text"
//                         placeholder="Enter task"
//                         value={title}
//                         onChange={(e) => setTitle(e.target.value)}
//                     />
//                 </Form.Group>
//                 <Button variant="primary" type="submit" disabled={isSubmitting}>
//                     Add Task
//                 </Button>
//             </Form>
//         </>
//     );
// };

// export default AddTask;

import React, { useState } from 'react';
import { FormControl, Button, Alert } from 'react-bootstrap';
import Rating from './Rating'; // Ensure this path is correct

const AddTask = ({ onAddTask }) => {
    const [title, setTitle] = useState('');
    const [urgency, setUrgency] = useState(1);
    const [importance, setImportance] = useState(1);
    const [effort, setEffort] = useState(1);
    const [error, setError] = useState('');

    const handleSubmit = async () => {
        if (!title.trim()) {
            setError('Please enter a title for the task.');
            return;
        }
        setError('');
        try {
            const totalScore = ((urgency + importance + effort) / 3).toFixed(2);
            const newTask = {
                title,
                urgency,
                importance,
                effort,
                totalScore
            };
            await onAddTask(newTask);
            setTitle('');
            setUrgency(1);
            setImportance(1);
            setEffort(1);
        } catch (error) {
            console.error('Failed to add task:', error);
            setError('Failed to add task. Please try again.');
        }
    };

    return (
        <div className="task-form">
            {error && <Alert variant="danger">{error}</Alert>}
            <FormControl
                type="text"
                placeholder="Add a new todo"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="mb-3"
            />
            <Rating label="Urgency" value={urgency} onRate={setUrgency} />
            <Rating label="Importance" value={importance} onRate={setImportance} />
            <Rating label="Effort" value={effort} onRate={setEffort} />
            <Button onClick={handleSubmit} className="mt-2">Add Task</Button>
        </div>
    );
};

export default AddTask;
