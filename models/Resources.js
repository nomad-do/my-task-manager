const mongoose = require('mongoose');

const resourceSchema = new mongoose.Schema({
    title: String,
    url: String,
    // other fields
});

module.exports = mongoose.model('Resource', resourceSchema);
