// require('dotenv').config();
// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const path = require('path');

// const app = express();
// app.use(cors());

// app.use(cors({
//   origin: 'http://localhost:3000',
//   methods: 'POST, GET, PUT, DELETE',
//   credentials: true,
// }));

// const authRoutes = require('./routes/authRoutes');
// const taskRoutes = require('./routes/taskRoutes');
// const userRoutes = require('./routes/userRoutes');

// console.log('Loading app.js');

// mongoose.set('strictQuery', true);

// const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/my-task-manager';

// mongoose.connect(mongoURI, {  
//   serverSelectionTimeoutMS: 30000,
//   socketTimeoutMS: 45000,
// })
//   .then(() => console.log('MongoDB connected'))
//   .catch(err => console.error('MongoDB connection error:', err));

// app.use(express.static(path.join(__dirname, 'public')));

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // Route setup
// app.use('/api/auth', authRoutes);
// app.use('/api/tasks', taskRoutes);
// app.use('/api/users', userRoutes);

// // Error handling middleware
// app.use((err, _, res, next) => {
//   console.error(err.stack);
//   res.status(500).send('Something broke!');
// });

// const PORT = process.env.PORT || 3001;

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

// console.log('app.js loaded successfully');


require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const authRoutes = require('./routes/authRoutes');
const taskRoutes = require('./routes/taskRoutes');
const userRoutes = require('./routes/userRoutes'); 

const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

app.use(cors({
  origin: 'http://localhost:3000',
  methods: 'POST, GET, PUT, DELETE',
  credentials: true,
}));

console.log('Loading app.js');

mongoose.set('strictQuery', true);

const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/my-task-manager';

mongoose.connect(mongoURI, {
  serverSelectionTimeoutMS: 30000,
  socketTimeoutMS: 45000,
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Route setup
app.use('/api/auth', authRoutes);
app.use('/api/tasks', taskRoutes);
app.use('/api/users', userRoutes);

// Error handling middleware
app.use((err, _, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

console.log('app.js loaded successfully');

module.exports = app;

// Add route for creating dummy user
app.post('/api/create-dummy-user', async (req, res) => {
  try {
    const dummyUser = new User({
      username: 'dow3029', // Change to a new unique username
      password: 'rodk3884' // Ideally, hash the password before saving
    });
    await dummyUser.save();
    res.status(201).json({ message: 'Dummy user created successfully', dummyUser });
  } catch (error) {
    console.error('Error creating dummy user:', error);
    res.status(500).json({ message: 'Error creating dummy user' });
  }
});

