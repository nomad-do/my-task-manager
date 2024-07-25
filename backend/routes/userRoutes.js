const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authenticateToken = require('../middlewares/authenticateToken');

// Route to get user profile
router.get('/profile/:userId', authenticateToken, userController.getProfile);

// Route to update user profile
router.put('/profile/:userId', authenticateToken, userController.updateProfile);

module.exports = router;
