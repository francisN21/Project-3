// Auth middleware for authentication
// Using JWT
const jwt = require("jsonwebtoken");
// Require the dotenv
require("dotenv").config();

// Auth function to request, respond, and continue
const auth = (req, res, next) => {
  // Check the token
  try {
    const token = req.header("x-auth-token");
    // If no token, status 401
    if (!token) {
      return res.status(401).json({ msg: "no token found" });
    }
    // If verified, set the JWT token
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    // If not verified, status 401
    if (!verified) {
      return res.status(401).json({ msg: "This token failed verification" });
    }
    // Set user to verified
    req.user = verified.id;
    // Next!
    next();
    // Gotta catch them errors!
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
// Export Auth!
module.exports = auth;
