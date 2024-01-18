const express = require('express');
const router = express.Router();
const storyController = require('../controllers/storyController');

// Route to get all stories
router.get('/', storyController.getAllStories);

// Route to create a new story
router.post('/', storyController.createStory);

// Route to get a story by ID
router.get('/:id', storyController.getStoryById);

// Route to update a story by ID
router.put('/:id', storyController.updateStory);

//Route to delete a story by ID
router.delete('/:id', storyController.deleteStory);

module.exports = router;