require('dotenv').config();
const express = require('express');
const app = express();
app.use(express.json());
const userRoutes = require('./routes/userRoutes');
const storyRoutes = require('./routes/storyRoutes');
const chapterRoutes = require('./routes/chapterRoutes');
const authRoutes = require('./routes/authRoutes');

const mongoose = require('mongoose');

const newId = new mongoose.Types.ObjectId();
console.log(newId); // This will log a new unique ObjectID

app.use('/api/users', userRoutes);
app.use('/api/stories', storyRoutes);
app.use('/api/chapters', chapterRoutes);
app.use('/auth', authRoutes);

const logger = require("./config/logger");
logger.error("hello world!");

mongoose.set('debug', true);
mongoose.connect('mongodb://127.0.0.1:27017/my-story')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB...', err));

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

app.listen(3000, () => {
  console.log("Serving on port 3000");
});