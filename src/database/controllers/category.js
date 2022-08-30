const categoryService = require('../services/category');

const createCategory = async (req, res) => {
  const { name } = req.body;
  const result = await categoryService.createCategory(name);
  if (!result) {
    return res.status(400).json({ message: 'Category already exists' });
  }
  return res.status(201).json(result);
};

module.exports = {
  createCategory,
};