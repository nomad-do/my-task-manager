const express = require('express');
const router = express.Router();
const authMiddleware = require('./middleware/authMiddleware');
const chapterController = require('../controllers/chapterController'); // Ensure this matches the filename

router.get('/protected-route', authMiddleware, (req, res) => {
    res.send('This route is protected and you are authenticated');
});

// Route to create a new chapter
router.post('/', chapterController.createChapter);

// Route to get a specific chapter by ID
router.get('/:id', chapterController.getChapterById);

// Route to update a chapter by ID
router.put('/:id', chapterController.updateChapter);

// Route to delete a chapter by ID
router.delete('/:id', chapterController.deleteChapter);

// Additional routes can be added as needed
// In chapterController.js

exports.createChapter = async (req, res) => {
    // Logic for creating a new chapter
};

exports.getChapterById = async (req, res) => {
    // Logic for retrieving a chapter by ID
};

exports.updateChapter = async (req, res) => {
    // Logic for updating a chapter by ID
};

exports.deleteChapter = async (req, res) => {
    // Logic for deleting a chapter by ID
};


module.exports = router;

// const express = require('express');
// const router = express.Router();
// const chaptersController = require('../controllers/chaptersController');

// // POST endpoint to create a new chapter
// router.post('/chapters', chaptersController.createChapter);

// module.exports = router;


