const { BlogPost, User, PostCategory, sequelize } = require('../models');

const createPost = async (title, content, categoryIds, email) => {
  const transactionFunc = await sequelize.transaction(async (transaction) => {
  const user = await User.findOne({ where: { email } }, { transaction });
  const newPost = await BlogPost.create({ title, content, userId: user.id }, { transaction });
  const { id, userId, updated, published } = newPost;
  const map = categoryIds.map((categoryId) => {
    const newPostCategory = { postId: newPost.id, categoryId };
    return newPostCategory;
  });
  await PostCategory.bulkCreate(map, { transaction });
  const result = { id, title: newPost.title, content: newPost.content, userId, updated, published };
  return result;
  });
  return transactionFunc;
};

module.exports = {
  createPost,
};
