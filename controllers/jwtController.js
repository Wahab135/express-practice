const jwt = require('jsonwebtoken');

const JWT_SECRET = 'xyz'; // Replace this with your actual JWT secret

// Function to generate a JWT token
const generateToken = (payload) => {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' }); // Token will expire in 1 hour
};

// Function to verify a JWT token
const verifyToken = (token) => {
  return jwt.verify(token, JWT_SECRET);
};

module.exports = {
  generateToken,
  verifyToken,
};