const tokenHelper = require('../helpers/token');

const tokenValidation = (req, res, next) => {
  const { authorization } = req.headers;
  try {
    const dataToken = tokenHelper.verifyToken(authorization);
    req.userId = dataToken.id;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Invalid token' });
  }
};

module.exports = tokenValidation;