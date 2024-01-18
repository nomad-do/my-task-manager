const mongoose = require('mongoose');

const chapterSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    content: {
        type: String,
        required: true
    },
    story: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Story', // Reference to the Story this chapter belongs to
        required: true
    },
    // Optional: chapter number or sequence
    number: {
        type: Number,
        required: true
    },
    // Add other fields as necessary, like creationDate, lastUpdated, etc.
});

const Chapter = mongoose.model('Chapter', chapterSchema);

module.exports = Chapter;
