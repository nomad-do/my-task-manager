const jwt = require('jsonwebtoken');

// Helper function to decode and log JWT token claims
const logTokenClaims = (token) => {
  const decoded = jwt.decode(token); // Decode the token
  console.log('Token Claims:', decoded); // Log the token payload
};

module.exports = logTokenClaims;
