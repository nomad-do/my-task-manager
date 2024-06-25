require('dotenv').config(); 
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors()); 

app.use(cors({
  origin: 'http://localhost:3000',
  methods: 'POST',
  credentials: true, 
}));

const testRoutes = require('./routes/testRoutes'); 
const authRoutes = require('./routes/authRoutes'); 
const taskRoutes = require('./routes/taskRoutes'); 

console.log('Loading app.js');

mongoose.set('strictQuery', true);

const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/my-task-manager'; // Use environment variable for MongoDB URI

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 30000, 
  socketTimeoutMS: 45000, 
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

app.use(express.static(path.join(__dirname, 'public'))); 

app.use(express.json());
app.use('/api/test', testRoutes); 
app.use('/api/auth', authRoutes); 
app.use('/api/tasks', taskRoutes); 

app.use(express.static(path.join(__dirname, 'public'))); 

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

console.log('app.js loaded successfully');

module.exports = app; 