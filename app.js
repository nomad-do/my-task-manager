require('dotenv').config();
const express = require('express');
const app = express();
app.use(express.json());
const cors = require('cors');

// Import routers
const todosRouter = require('./routes/todosRoute'); // Assumes you have a todos.js in your routes folder

const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');

const mongoose = require('mongoose');

const newId = new mongoose.Types.ObjectId();
console.log(newId); // This will log a new unique ObjectID

app.use('/api/users', userRoutes);
app.use('/auth', authRoutes);

const logger = require("./config/logger");
logger.error("hello world!");

mongoose.set('debug', true);
mongoose.set('strictQuery', true);

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected successfully'))
.catch(err => console.error('MongoDB connection error:', err));

app.use((req, res, next) => {
    res.status(404).send("Sorry, can't find that!");
}); 

app.use((err, req, res, next) => {
  console.error(err.stack); // Log the error stack for debugging
  res.status(500).send({ error: err.message }); // Send a generic error message or customize based on the error
});

app.get('/', (req, res) => {
  logger.info('GET /');
  res.sendStatus(200);
});

app.get('/error', (req, res) => {
  logger.error('Error message');
  res.sendStatus(500);
});

// Example of a simple API endpoint
app.get('/api/tasks', (req, res) => {
  res.json({ message: 'This is a CORS-enabled API.' });
});

// Use cors middleware with options if needed
app.use(cors({
  origin: 'http://localhost:3000'  // Allow only the React frontend to access the backend
}));


// Set the port and start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

// app.listen(3000, () => {
//   console.log("Serving on port 3000");
// });
