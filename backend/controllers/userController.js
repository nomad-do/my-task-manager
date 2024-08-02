const User = require('../models/User');
const mongoose = require('mongoose');

exports.getProfile = async (req, res) => {
  const { userId } = req.params;
  if (!mongoose.Types.ObjectId.isValid(userId)) {
    return res.status(400).json({ message: 'Invalid user ID' });
  }

  try {
    const user = await User.findById(userId).select('-password'); 
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    console.error('Error retrieving user profile:', error);
    res.status(500).json({ message: 'An error occurred while retrieving the profile' });
  }
};

exports.updateProfile = async (req, res) => {
  const { userId } = req.params;
  const { username, password } = req.body;

  if (!mongoose.Types.ObjectId.isValid(userId)) {
    return res.status(400).json({ message: 'Invalid user ID' });
  }

  if (!username && !password) {
    return res.status(400).json({ message: 'Username or password is required.' });
  }

  if (password && password.length < 6) {
    return res.status(400).json({ message: 'Password must be at least 6 characters long.' });
  }

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    if (username) user.username = username;
    if (password) user.password = password; 

    await user.save();

    res.json({ message: 'Profile updated successfully', user });
  } catch (error) {
    console.error('Error updating profile:', error);
    res.status(500).json({ message: 'An error occurred while updating the profile' });
  }
};
