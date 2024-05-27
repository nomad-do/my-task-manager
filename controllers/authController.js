const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const saltRounds = 10;
const User = require("../models/User");

// Using the JWT_SECRET from the .env file
const jwtSecret = process.env.JWT_SECRET;

const authController = {
  // Registration function
  register: async (req, res) => {
    try {
      let { username, password } = req.body;

      if (!username || !password) {
        return res.status(400).send({ error: "Username and password are required." });
      }

      // Check if the user already exists
      const existingUser = await User.findOne({ username });
      if (existingUser) {
        return res.status(400).send({ error: "Username is already taken." });
      }

      // Create a new user instance
      const user = new User({ username, password });
      // The password will be hashed in the pre('save') middleware before saving
      await user.save();

      res.status(201).send({
        message: "User created successfully",
        userId: user._id,
        username: user.username,
      });
    } catch (error) {
      console.error("Registration error:", error);
      res.status(500).send({ error: "An error occurred during registration." });
    }
  },

  // Login function
  login: async (req, res) => {
    try {
      const { username, password } = req.body;

      if (!username || username.trim() === "" || !password || password.trim() === "") {
        return res.status(400).send({ error: "Username and password are required." });
      }

      const user = await User.findOne({ username: username.trim() });
      if (!user) {
        return res.status(401).send({ error: "User not found." });
      }

      // Password verification
      const match = await bcrypt.compare(password, user.password);
      if (match) {
        // Create JWT payload
        const payload = {
          userId: user._id,
          username: user.username,
        };

        // Sign the token with the payload, secret key from .env, and expiration time
        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1h" });

        res.send({ message: "Login successful", token: token });
      } else {
        res.status(401).send({ error: "Invalid password." });
      }
    } catch (error) {
      console.error("Login error:", error);
      res.status(500).send({ error: "An error occurred during login." });
    }
  },
};

module.exports = authController;


// const jwt = require('jsonwebtoken');
// const bcrypt = require('bcrypt');
// const User = require('../models/User');

// const jwtSecret = process.env.JWT_SECRET;

// const authController = {
//   register: async (req, res) => {
//     try {
//       const { username, password } = req.body;

//       if (!username || !password) {
//         return res.status(400).send({ error: "Missing username or password." }); // Simplified to match API.md
//       }

//       const existingUser = await User.findOne({ username });
//       if (existingUser) {
//         return res.status(400).send({ error: "Username is already taken." }); // Consider adding this case to API.md
//       }

//       const user = new User({ username, password });
//       await user.save();

//       res.status(201).send({ message: "User created successfully." }); // Simplified response
//     } catch (error) {
//       console.error("Registration error:", error);
//       res.status(500).send({ error: "An error occurred during registration." }); // Add this to API.md
//     }
//   },

//   login: async (req, res) => {
//     try {
//       const { username, password } = req.body;

//       if (!username || !password) {
//         return res.status(400).send({ error: "Username and password are required." });
//       }

//       const user = await User.findOne({ username });
//       if (!user) {
//         return res.status(401).send({ error: "User not found." });
//       }

//       const match = await bcrypt.compare(password, user.password);
//       if (match) {
//         const payload = { userId: user._id, username: user.username };
//         const token = jwt.sign(payload, jwtSecret, { expiresIn: "1h" });

//         res.status(200).send({ message: "Login successful", token: token });
//       } else {
//         res.status(401).send({ error: "Invalid password." });
//       }
//     } catch (error) {
//       console.error("Login error:", error);
//       res.status(500).send({ error: "An error occurred during login." });
//     }
//   }
// };

// module.exports = authController;
