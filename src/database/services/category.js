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

module.exports = {
  createCategory,
};