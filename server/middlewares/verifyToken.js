const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  const token = req.header('Authorization')?.split(' ')[1]; // Extract token from header
  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied.' });
  }

  try {
    const decoded = jwt.verify(token, 'your_secret_key'); // Replace with your JWT secret
    req.user = decoded; // Set the user payload from the token
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid.' });
  }
};

module.exports = verifyToken;
