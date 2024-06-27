const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const router = express.Router();
const User = require('../models/User');
const authenticateToken = require('../middlewares/authenticateToken');

router.post('/register', async (req, res) => {
  const { username, password } = req.body;

  try {
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).send('User already exists.');
    }

    const user = new User({ username, password });
    await user.save();

    res.status(201).send('User registered successfully.');
  } catch (err) {
    res.status(500).send('Server error.');
  }
});

router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).send('Invalid username or password.');
    }

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(400).send('Invalid username or password.');
    }

    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.header('Authorization', token).send(token);
  } catch (err) {
    res.status(500).send('Server error.');
  }
});

router.get('/profile', authenticateToken, async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select('-password');
    if (!user) {
      return res.status(404).send('User not found.');
    }
    res.json(user);
  } catch (err) {
    res.status(500).send('Server error.');
  }
});

router.put('/profile', authenticateToken, async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findById(req.user._id);
    if (!user) {
      return res.status(404).send('User not found.');
    }

    if (username) user.username = username;
    if (password) user.password = await bcrypt.hash(password, 10);

    await user.save();

    res.send('User profile updated successfully.');
  } catch (err) {
    res.status(500).send('Server error.');
  }
});

router.delete('/profile', authenticateToken, async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.user._id);
    if (!user) {
      return res.status(404).send('User not found.');
    }
    res.send('User profile deleted successfully.');
  } catch (err) {
    res.status(500).send('Server error.');
  }
});

module.exports = router;
