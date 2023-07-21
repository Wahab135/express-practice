const jwt = require("jsonwebtoken");

const JWT_SECRET = "xyz"; // Replace this with your actual JWT secret

// Function to generate a JWT token
const generateToken = (payload) => {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: "1h" }); // Token will expire in 1 hour
};

// Function to verify a JWT token
const verifyToken = (token) => {
  return jwt.verify(token, JWT_SECRET);
};

const authMiddleware = (req, res, next) => {
  // Get the token from the request headers
  const token = req.header("Authorization");

  // Check if the token exists
  if (!token) {
    return res.status(401).json({ message: "Authentication token missing" });
  }

  try {
    // Verify the token using the secret key
    const decoded = jwt.verify(token, secretKey);
    // Add the user object to the request for further use in the route handlers
    req.user = decoded;
    // Proceed to the next middleware or route handler
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid authentication token" });
  }
};

module.exports = {
  generateToken,
  verifyToken,
};

