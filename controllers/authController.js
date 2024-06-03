const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const logTokenClaims = require('../utils/logTokenClaims'); // Import the helper function

// Registration function
exports.register = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Check if the username already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: 'Username is already taken' });
    }

    // Create a new user instance
    const user = new User({ username, password });
    await user.save();

    const token = jwt.sign(
      { userId: user._id, username: user.username },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    logTokenClaims(token); // Log the token claims

    console.log('New user registered:', user);
    console.log('Generated JWT token:', token);

    res.status(201).json({ message: 'User registered successfully', token });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ message: 'An error occurred during registration' });
  }
};

// Login function
exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign(
      { userId: user._id, username: user.username },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    const refreshToken = jwt.sign(
      { userId: user._id, username: user.username },
      process.env.REFRESH_TOKEN_SECRET,
      { expiresIn: '7d' }
    );

    logTokenClaims(token); // Log the token claims

    console.log('User logged in:', user);
    console.log('Generated JWT token:', token);
    console.log('Generated Refresh token:', refreshToken);

    res.json({ token, refreshToken }); // Include the refresh token in the response
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'An error occurred during login' });
  }
};

// Refresh token function
exports.refreshToken = async (req, res) => {
  const refreshToken = req.headers['authorization'].split(' ')[1];
  if (!refreshToken) {
    return res.status(401).json({ message: 'No token provided' });
  }

  jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Token is not valid' });
    }

    const newToken = jwt.sign(
      { userId: user.userId, username: user.username },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    const newRefreshToken = jwt.sign(
      { userId: user.userId, username: user.username },
      process.env.REFRESH_TOKEN_SECRET,
      { expiresIn: '7d' }
    );

    logTokenClaims(newToken); // Log the token claims

    res.json({ token: newToken, refreshToken: newRefreshToken });
  });
};




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
