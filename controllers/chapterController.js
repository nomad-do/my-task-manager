const Chapter = require('../models/Chapters'); // Adjust the path to your Chapter model

// Create a new chapter
exports.createChapter = async (req, res) => {
    try {
        const newChapter = new Chapter(req.body);
        await newChapter.save();
        res.status(201).json(newChapter);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get all chapters
exports.getAllChapters = async (req, res) => {
    try {
        const chapters = await Chapter.find();
        res.json(chapters);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get a single chapter by ID
exports.getChapterById = async (req, res) => {
    try {
        const chapter = await Chapter.findById(req.params.id);
        if (!chapter) {
            return res.status(404).json({ message: 'Chapter not found' });
        }
        res.json(chapter);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Update a chapter
exports.updateChapter = async (req, res) => {
    try {
        const chapter = await Chapter.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!chapter) {
            return res.status(404).json({ message: 'Chapter not found' });
        }
        res.json(chapter);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Delete a chapter
exports.deleteChapter = async (req, res) => {
    try {
        const chapter = await Chapter.findByIdAndDelete(req.params.id);
        if (!chapter) {
            return res.status(404).json({ message: 'Chapter not found' });
        }
        res.status(200).json({ message: 'Chapter deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = exports;
