const jwt = require("jsonwebtoken");
require("dotenv").config();

const auth = (req, res, next) => {
  try {
    const token = req.header("x-auth-token");

    if (!token) {
      return res.status(401).json({ msg: "no token found" });
    }

    const verified = jwt.verify(token, process.env.JWT_SECRET);

    if (!verified) {
      return res.status(401).json({ msg: "This token failed verification" });
    }

    req.user = verified.id;
    next();
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

module.exports = auth;
