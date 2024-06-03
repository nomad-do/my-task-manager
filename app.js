require('dotenv').config(); // Load environment variables from .env
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Add CORS middleware
const app = express();
const testRoutes = require('./routes/testRoutes'); // Ensure this path is correct
const authRoutes = require('./routes/authRoutes'); // Ensure this path is correct
const taskRoutes = require('./routes/taskRoutes'); // Ensure this path is correct

console.log('Loading app.js');

// Set the strictQuery option for Mongoose
mongoose.set('strictQuery', true);

const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/my-task-manager'; // Use environment variable for MongoDB URI

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 30000, // Increase timeout to 30 seconds
  socketTimeoutMS: 45000, // Adjust if needed
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

app.use(cors()); // Enable CORS
app.use(express.json());
app.use('/api/test', testRoutes); // Prefix the routes with /api/test
app.use('/api/auth', authRoutes); // Prefix the routes with /api/auth
app.use('/api/tasks', taskRoutes); // Prefix the routes with /api/tasks

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

console.log('app.js loaded successfully');
