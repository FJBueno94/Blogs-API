// const jwt = require('jsonwebtoken');
const { User } = require('../models');
const tokenHelper = require('../helpers/token');

const login = async (email, password) => {
  const payload = { 
    email,
    password,
   };
  const result = await User.findOne({ 
    attributes: { email, password },
    where: { email },
    raw: true,
  });
  if (!result || result.password !== password) {
    return null;
  }
  const token = tokenHelper.createToken(payload);
  return token;
};

const createLogin = async (email, password, displayName, image) => {
  const verifyUser = await User.findOne({
    where: { email },
    raw: true,
  });
  if (verifyUser) {
    return null;
  }
  await User.create({ email, password, displayName, image });
  const token = tokenHelper.createToken({ email, password });
  return token;
};

const getUser = async () => {
  const result = await User.findAll({
    attributes: { exclude: ['password'] },
    raw: true,
  });
  return result;
};

module.exports = {
  login,
  createLogin,
  getUser,
};
