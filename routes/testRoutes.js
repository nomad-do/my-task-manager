// const express = require('express');
// const jwt = require('jsonwebtoken');
// const router = express.Router();

// // Generate a token
// router.get('/generate-token', (req, res) => {
//   const payload = { username: 'testuser' };
//   const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
//   res.json({ token });
// });

// // Verify a token
// router.get('/verify-token', (req, res) => {
//   const authHeader = req.headers['authorization'];
//   if (!authHeader) {
//     return res.status(401).json({ error: 'Authorization header is required' });
//   }

//   const token = authHeader.split(' ')[1];
//   if (!token) {
//     return res.status(401).json({ error: 'Token is required' });
//   }

//   jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
//     if (err) {
//       return res.status(401).json({ error: 'Token is not valid' });
//     }
//     res.json({ message: 'Token is valid', decoded });
//   });
// });

// module.exports = router;
