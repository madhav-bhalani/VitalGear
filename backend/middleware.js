const { JWT_SECRETS } = require("./config");
const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const authHeader = req.body.authorization;

  if (!authHeader || !authHeader.startsWith("bearer ")) {
    return res.status(403).json({});
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, JWT_SECRETS);

    req.userId = decoded.userId;
    next();
  } catch (error) {
    res.status(403).josn({});
  }
};
    
module.exports = {
  authMiddleware,
};
