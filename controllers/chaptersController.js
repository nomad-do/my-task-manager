const Chapter = require('../models/Chapter'); // Adjust the path to your Chapter model

// Get all chapters for a story
exports.getAllChapters = async (req, res) => {
    try {
        const chapters = await Chapter.find({ story: req.params.storyId });
        res.status(200).json(chapters);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Create a new chapter
exports.createChapter = async (req, res) => {
    try {
        const newChapter = new Chapter({
            ...req.body,
            story: req.params.storyId // Assuming storyId is passed in the route
        });
        await newChapter.save();
        res.status(201).json(newChapter);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Additional CRUD operations (update, delete, get by ID, etc.)

module.exports = Chapter;
