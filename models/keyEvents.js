const mongoose = require('mongoose');

const keyEventSchema = new mongoose.Schema({
    name: String,
    description: String,
    // other fields
});

module.exports = mongoose.model('KeyEvent', keyEventSchema);
