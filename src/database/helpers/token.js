const jwt = require('jsonwebtoken');

require('dotenv').config();

const { JWT_SECRET } = process.env;
const JWT_OPTIONS = { expiresIn: '1d', algorithm: 'HS256' };

const createToken = (payload) => jwt.sign(payload, JWT_SECRET, JWT_OPTIONS);

const verifyToken = (token) => jwt.verify(token, JWT_SECRET, JWT_OPTIONS);

module.exports = {
  createToken,
  verifyToken,
};
