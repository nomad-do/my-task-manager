// // services/userService.js
// const User = require('../models/User'); // Adjust the path to your User model

// const userService = {
//     createUser: async function(userData) {
//         const newUser = new User(userData);
//         await newUser.save();
//         return newUser;
//     },

//     checkUsernameExists: async function(username) {
//         const user = await User.findOne({ username: username });
//         return !!user;
//     },

//     getAllUsers: async function() {
//         return await User.find();
//     },

//     getUserById: async function(id) {
//         return await User.findById(id);
//     },

//     updateUser: async function(id, updateData) {
//         return await User.findByIdAndUpdate(id, updateData, { new: true });
//     },

//     deleteUser: async function(id) {
//         return await User.findByIdAndDelete(id);
//     }
// };

// module.exports = userService;
