const jwt = require('jsonwebtoken');

function authenticateToken(req, res, next) {
  console.log('Authenticating token...');
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (token == null) {
    console.log('No token provided.');
    return res.sendStatus(401);
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      console.log('Token verification failed.');
      return res.sendStatus(403);
    }
    console.log('Token verified successfully.');
    console.log('Decoded user:', user);
    req.user = user; // Attach the decoded user information to the request
    next();
  });
}

module.exports = authenticateToken;
