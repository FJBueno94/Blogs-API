const { Category } = require('../models');

const createCategory = async (name) => {
  const verifyCategory = await Category.findOne({
    where: { name },
    raw: true,
  });
  if (verifyCategory) {
    return null;
  }
  const newCategory = await Category.create({ name });
  return newCategory;
};

const getCategories = async () => {
  const categories = await Category.findAll({
    raw: true,
  });
  if (!categories) {
    return null;
  }
  return categories;
};

module.exports = {
  createCategory,
  getCategories,
};