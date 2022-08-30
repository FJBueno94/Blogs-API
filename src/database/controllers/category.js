const categoryService = require('../services/category');

const createCategory = async (req, res) => {
  const { name } = req.body;
  const result = await categoryService.createCategory(name);
  if (!result) {
    return res.status(400).json({ message: 'Category already exists' });
  }
  return res.status(201).json(result);
};

const getCategories = async (req, res) => {
  const result = await categoryService.getCategories();
  if (!result) {
    return res.status(400).json({ message: 'No categories found' });
  }
  return res.status(200).json(result);
};

module.exports = {
  createCategory,
  getCategories,
};