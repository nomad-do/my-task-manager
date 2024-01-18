const mongoose = require('mongoose');

// Create a new ObjectId
const newObjectId = new mongoose.Types.ObjectId();
console.log("Generated ObjectId: ", newObjectId.toString());

// Optionally, convert it back to check
const isValid = mongoose.Types.ObjectId.isValid(newObjectId);
console.log("Is valid ObjectId: ", isValid);
