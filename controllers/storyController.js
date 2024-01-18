const Story = require('../models/Story'); // Adjust the path to your Story model

// Get all stories
exports.getAllStories = async (req, res) => {
    try {
        const stories = await Story.find();
        res.status(200).json(stories);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get a single story by ID
exports.getStoryById = async (req, res) => {
    try {
        const story = await Story.findById(req.params.id);
        if (!story) {
            return res.status(404).json({ message: 'Story not found' });
        }
        res.json(story);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Create a new story
exports.createStory = async (req, res) => {
    try {
        const newStory = new Story(req.body);
        await newStory.save();
        res.status(201).json(newStory);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Update a story
exports.updateStory = async (req, res) => {
    try {
        const story = await Story.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!story) {
            return res.status(404).json({ message: 'Story not found' });
        }
        res.json(story);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Delete a story
exports.deleteStory = async (req, res) => {
    try {
        const story = await Story.findByIdAndDelete(req.params.id);
        if (!story) {
            return res.status(404).json({ message: 'Story not found' });
        }
        res.status(200).json({ message: 'Story deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = exports;
