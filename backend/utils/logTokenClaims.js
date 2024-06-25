const jwt = require('jsonwebtoken');

const logTokenClaims = (token) => {
  const decoded = jwt.decode(token); 
  console.log('Token Claims:', decoded); 
};

module.exports = logTokenClaims;
