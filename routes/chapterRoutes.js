const express = require('express');
const router = express.Router();
const chapterController = require('../controllers/chapterController');

// Route to create a new chapter
router.post('/', chapterController.createChapter);

// Route to get all chapters
router.get('/', chapterController.getAllChapters);

// Route to get a specific chapter by ID
router.get('/:id', chapterController.getChapterById);

// Route to update a chapter by ID
router.put('/:id', chapterController.updateChapter);

// Route to delete a chapter by ID
router.delete('/:id', chapterController.deleteChapter);

module.exports = router;
