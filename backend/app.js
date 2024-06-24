// require('dotenv').config(); // Load environment variables from .env
// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors'); // Make sure to require the cors module
// const path = require('path');

// const app = express();
// app.use(cors()); // Enable CORS

// app.use(cors({
//   origin: 'http://localhost:3000', // your frontend server URL
//   methods: 'POST',
//   credentials: true, // allow cookies
// }));

// const testRoutes = require('./routes/testRoutes'); // Ensure this path is correct
// const authRoutes = require('./routes/authRoutes'); // Ensure this path is correct
// const taskRoutes = require('./routes/taskRoutes'); // Ensure this path is correct

// console.log('Loading app.js');

// // Set the strictQuery option for Mongoose
// mongoose.set('strictQuery', true);

// const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/my-task-manager'; // Use environment variable for MongoDB URI

// mongoose.connect(mongoURI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   serverSelectionTimeoutMS: 30000, // Increase timeout to 30 seconds
//   socketTimeoutMS: 45000, // Adjust if needed
// })
//   .then(() => console.log('MongoDB connected'))
//   .catch(err => console.error('MongoDB connection error:', err));

// app.use(express.static(path.join(__dirname, 'public'))); // Serve static files

// app.use(express.json());
// app.use('/api/test', testRoutes); // Prefix the routes with /api/test
// app.use('/api/auth', authRoutes); // Prefix the routes with /api/auth
// app.use('/api/tasks', taskRoutes); // Prefix the routes with /api/tasks

// app.use(express.static(path.join(__dirname, 'public'))); 

// // Error handling middleware
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).send('Something broke!');
// });

// const PORT = process.env.PORT || 3001;

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

// console.log('app.js loaded successfully');

// module.exports = app; // Export the app for testing


//testing
require('dotenv').config(); // Load environment variables from .env
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors({ // Enable CORS
  origin: 'http://localhost:3000', // your frontend server URL
  methods: 'POST',
  credentials: true, // allow cookies
}));

const testRoutes = require('./routes/testRoutes'); // Ensure this path is correct
const authRoutes = require('./routes/authRoutes'); // Ensure this path is correct
const taskRoutes = require('./routes/taskRoutes'); // Ensure this path is correct

console.log('Loading app.js');

// Set the strictQuery option for Mongoose
mongoose.set('strictQuery', true);

const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/my-task-manager'; // Use environment variable for MongoDB URI

if (mongoose.connection.readyState === 0) {
  mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 30000, // Increase timeout to 30 seconds
    socketTimeoutMS: 45000, // Adjust if needed
  }).then(() => {
    console.log('MongoDB connected');
  }).catch(err => {
    if (err.name === 'MongoNetworkError') {
      console.error('Network error while attempting to connect to MongoDB:', err.message);
    } else if (err.name === 'MongoParseError') {
      console.error('MongoDB URI parsing error:', err.message);
    } else if (err.name === 'MongoTimeoutError') {
      console.error('MongoDB connection timed out:', err.message);
    } else if (err.name === 'MongoServerError') {
      console.error('MongoDB server error:', err.message);
    } else {
      console.error('MongoDB connection error:', err.message);
    }
    process.exit(1); // Optional: exit the process if the connection fails
  });

  // Event listeners for better error handling and debugging
  mongoose.connection.on('error', err => {
    if (err.name === 'MongoNetworkError') {
      console.error('Network error with existing MongoDB connection:', err.message);
    } else if (err.name === 'MongoTimeoutError') {
      console.error('MongoDB connection timed out:', err.message);
    } else {
      console.error('MongoDB connection error:', err.message);
    }
  });
}

app.use(express.static(path.join(__dirname, 'public'))); // Serve static files

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

module.exports = app; // Export the app for testing
