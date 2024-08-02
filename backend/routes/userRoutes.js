const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authenticateToken = require('../middlewares/authenticateToken');

router.get('/profile/:userId', authenticateToken, userController.getProfile);

router.put('/profile/:userId', authenticateToken, userController.updateProfile);

module.exports = router;
