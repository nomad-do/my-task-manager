// const express = require('express');
// const jwt = require('jsonwebtoken');
// const router = express.Router();

// // Generate a token
// router.get('/generate-token', (req, res) => {
//   const payload = { username: 'testuser' };
//   const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
//   res.json({ token });
// });

// // Verify a token
// router.get('/verify-token', (req, res) => {
//   const authHeader = req.headers['authorization'];
//   if (!authHeader) {
//     return res.status(401).json({ error: 'Authorization header is required' });
//   }

//   const token = authHeader.split(' ')[1];
//   if (!token) {
//     return res.status(401).json({ error: 'Token is required' });
//   }

//   jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
//     if (err) {
//       return res.status(401).json({ error: 'Token is not valid' });
//     }
//     res.json({ message: 'Token is valid', decoded });
//   });
// });

// module.exports = router;

// const express = require('express');
// const router = express.Router();
// const Task = require('./models/task'); // Adjust this path according to your project structure

// // Debugging log
// console.log('testroutes.js is being loaded');

// Temporary removal of mockUser middleware
// const mockUser = (req, res, next) => {
//   console.log('Mock user middleware');
//   req.user = { id: '60c72b2f9b1d4c6d88f4f8a9' }; // Replace with a valid user ID from your database
//   next();
// };

// router.use(mockUser);

// router.post('/tasks', async (req, res) => {
//   console.log('POST /tasks called');
//   try {
//     const { title, urgency, importance, effort, priority } = req.body;

//     if (!title || !urgency || !importance || !effort || !priority) {
//       console.error('Missing required fields:', { title, urgency, importance, effort, priority });
//       return res.status(400).json({ message: 'All fields are required' });
//     }

//     const newTask = new Task({
//       title,
//       urgency,
//       importance,
//       effort,
//       priority,
//       // user: req.user.id // Comment out for now
//     });

//     const savedTask = await newTask.save();
//     res.status(201).json(savedTask);
//   } catch (error) {
//     console.error('Error adding task:', error.message);
//     console.error('Stack Trace:', error.stack);
//     res.status(500).json({ message: 'Internal Server Error' });
//   }
// });

// module.exports = router;

// Debugging log
// console.log('testroutes.js loaded successfully');


const express = require('express');
const router = express.Router();
const Task = require('../models/task'); // Adjust this path according to your project structure

console.log('testroutes.js is being loaded');

router.post('/tasks', async (req, res) => {
  console.log('POST /tasks called');
  try {
    const { title, urgency, importance, effort } = req.body;

    if (!title || urgency == null || importance == null || effort == null) {
      console.error('Missing required fields:', { title, urgency, importance, effort });
      return res.status(400).json({ message: 'All fields are required' });
    }

    const priority = urgency + importance + effort;

    const newTask = new Task({
      title,
      urgency,
      importance,
      effort,
      priority,
      user: req.user ? req.user.id : '6657ae9d875e48ab627216f1' // Replace with a valid user ID
    });

    const savedTask = await newTask.save();
    res.status(201).json(savedTask);
  } catch (error) {
    console.error('Error adding task:', error.message);
    console.error('Stack Trace:', error.stack);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;

console.log('testroutes.js loaded successfully');
