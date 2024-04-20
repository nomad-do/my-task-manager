// require('dotenv').config();
// const express = require('express');
// const app = express();
// app.use(express.json());
// const cors = require('cors');

// // Import routers
// const userRoutes = require('./routes/userRoutes');
// const authRoutes = require('./routes/authRoutes');
// const taskRoutes = require('./routes/taskRoutes');

// const mongoose = require('mongoose');

// const newId = new mongoose.Types.ObjectId();
// console.log(newId); // This will log a new unique ObjectID

// app.use('/api/users', userRoutes);
// app.use('/auth', authRoutes);
// app.use('/tasks', taskRoutes);

// const logger = require("./config/logger");
// logger.error("hello world!");

// mongoose.set('debug', true);
// mongoose.set('strictQuery', true);

// mongoose.connect(process.env.MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// }).then(() => console.log('MongoDB connected successfully'))
// .catch(err => console.error('MongoDB connection error:', err));

// app.use((req, res, next) => {
//     res.status(404).send("Sorry, can't find that!");
// }); 

// app.use((err, req, res, next) => {
//   console.error(err.stack); // Log the error stack for debugging
//   res.status(500).send({ error: err.message }); // Send a generic error message or customize based on the error
// });

// app.get('/', (req, res) => {
//   logger.info('GET /');
//   res.sendStatus(200);
// });

// app.get('/error', (req, res) => {
//   logger.error('Error message');
//   res.sendStatus(500);
// });

// // Example of a simple API endpoint
// app.get('/api/tasks', (req, res) => {
//   res.json({ message: 'This is a CORS-enabled API.' });
// });

// // Use cors middleware with options if needed
// app.use(cors({
//   origin: 'http://localhost:3000'  // Allow only the React frontend to access the backend
// }));


// // Set the port and start the server
// const PORT = process.env.PORT || 3001;
// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });

require('dotenv').config();
const express = require('express');
const app = express();
app.use(express.json());
const cors = require('cors');
const mongoose = require('mongoose');
const logger = require('./config/logger');

// Use cors middleware before your routes
app.use(cors({
  origin: 'http://localhost:3000'  // Allow only the React frontend to access the backend
}));

// Import routers
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');
const taskRoutes = require('./routes/taskRoutes');  // Make sure this file exists and is correct

// Database connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('MongoDB connected successfully');
}).catch(err => {
  console.error('MongoDB connection error:', err);
});

// Routes setup
app.use('/api/users', userRoutes);
app.use('/auth', authRoutes);
app.use('/api/tasks', taskRoutes);  // Adjusted to match the RESTful API convention

// 404 Not Found Middleware
app.use((req, res, next) => {
    res.status(404).send("Sorry, can't find that!");
});

// Error Handling Middleware
app.use((err, req, res, next) => {
  logger.error(err.stack);
  res.status(500).send({ error: err.message });
});

// Server start
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    logger.info(`Server running on port ${PORT}`);
});
