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
    }
    // Add other fields as necessary
});

const Chapter = mongoose.model('Chapter', chapterSchema);

module.exports = Chapter;
