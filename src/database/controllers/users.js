const userService = require('../services/users');

const login = async (req, res) => {
  const { email, password } = req.body;
  const result = await userService.login(email, password);
  if (!result) {
    return res.status(400).json({ message: 'Invalid fields' });
  }
  return res.status(200).json({ token: result });
};

const createLogin = async (req, res) => {
  const { email, password, displayName, image } = req.body;
  const result = await userService.createLogin(email, password, displayName, image);
  if (!result) {
    return res.status(409).json({ message: 'User already registered' });
  }
  return res.status(201).json({ token: result });
};

const getAllUsers = async (req, res) => {
  const result = await userService.getAllUsers(req.user);
  return res.status(200).json(result);
};

const getUser = async (req, res) => {
  const { id } = req.params;
  const result = await userService.getUser(id);
  if (!result) {
    return res.status(404).json({ message: 'User does not exist' });
  }
  return res.status(200).json(result);
};

module.exports = {
  login,
  createLogin,
  getAllUsers,
  getUser,
};
