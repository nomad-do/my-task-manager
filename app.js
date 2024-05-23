require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const logger = require('./config/logger');
const authRoutes = require('./routes/authRoutes');
const taskRoutes = require('./routes/taskRoutes');
// const testRoutes = require('./routes/testRoutes'); // Optional, inactive
// const userRoutes = require('./routes/userRoutes'); // Optional, inactive
// const userService = require('./services/userService'); // Optional, inactive

const app = express();

// Middleware
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3000'
}));

// Connect to Database
mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('MongoDB connected successfully');
}).catch(err => {
  console.error('MongoDB connection error:', err);
  process.exit(1); // Exit process with failure
});

// Routes
app.use('/auth', authRoutes);
app.use('/api/tasks', taskRoutes);
// app.use('/api/test', testRoutes); // Optional, inactive
// app.use('/api/users', userRoutes); // Optional, inactive

// 404 Handler
app.use((req, res, next) => {
  res.status(404).send("Sorry, can't find that!");
});

// Error Handler
app.use((err, req, res, next) => {
  logger.error(err.stack);
  res.status(500).send({ error: err.message });
});

// Start Server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  logger.info(`Server running on port ${PORT}`);
});
