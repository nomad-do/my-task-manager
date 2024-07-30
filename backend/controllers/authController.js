const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const logTokenClaims = require('../utils/logTokenClaims');
const mongoose = require('mongoose');

exports.register = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ message: 'Username and password are required.' });
    }

    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: 'Username is already taken' });
    }

    const user = new User({ username, password });
    await user.save();

    const token = jwt.sign(
      { _id: user._id, username: user.username },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    const refreshToken = jwt.sign(
      { _id: user._id, username: user.username },
      process.env.REFRESH_TOKEN_SECRET,
      { expiresIn: '7d' }
    );

    logTokenClaims(token);

    console.log('New user registered:', user);
    console.log('Generated JWT token:', token);

    res.status(201).json({ message: 'User registered successfully', token, refreshToken });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ message: 'An error occurred during registration' });
  }
};

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ message: 'Username and password are required.' });
    }

    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign(
      { _id: user._id, username: user.username },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    const refreshToken = jwt.sign(
      { _id: user._id, username: user.username },
      process.env.REFRESH_TOKEN_SECRET,
      { expiresIn: '7d' }
    );

    logTokenClaims(token);

    console.log('User logged in:', user);
    console.log('Generated JWT token:', token);
    console.log('Generated Refresh token:', refreshToken);

    res.json({ token, refreshToken, userId: user._id });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'An error occurred during login' });
  }
};

exports.refreshToken = async (req, res) => {
  const authHeader = req.headers['authorization'];
  if (!authHeader) {
    return res.status(401).json({ message: 'No token provided' });
  }

  const refreshToken = authHeader.split(' ')[1];
  if (!refreshToken) {
    return res.status(401).json({ message: 'Token is not valid' });
  }

  jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, async (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Token is not valid' });
    }

    const storedUser = await User.findById(user._id);
    if (!storedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    const newToken = jwt.sign(
      { _id: user._id, username: user.username },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    const newRefreshToken = jwt.sign(
      { _id: user._id, username: user.username },
      process.env.REFRESH_TOKEN_SECRET,
      { expiresIn: '7d' }
    );

    logTokenClaims(newToken);

    res.json({ token: newToken, refreshToken: newRefreshToken });
  });
};

exports.updateProfile = async (req, res) => {
  try {
    const { userId } = req.params;
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ message: 'Username and password are required.' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { username, password: hashedPassword },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    console.log('User profile updated:', updatedUser);

    res.status(200).json({ message: 'Profile updated successfully', user: updatedUser });
  } catch (error) {
    console.error('Profile update error:', error);
    res.status(500).json({ message: 'An error occurred during profile update' });
  }
};

exports.getProfile = async (req, res) => {
  const { userId } = req.params;
  if (!mongoose.Types.ObjectId.isValid(userId)) {
    return res.status(400).json({ message: 'Invalid user ID' });
  }

  try {
    const user = await User.findById(userId).select('-password'); // Exclude password
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    console.error('Error retrieving user profile:', error);
    res.status(500).json({ message: 'An error occurred while retrieving the profile' });
  }
};