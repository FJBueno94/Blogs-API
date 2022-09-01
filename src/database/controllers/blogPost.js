const blogPostService = require('../services/blogPost');

const createPost = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const { email } = req;
  const result = await blogPostService.createPost(title, content, categoryIds, email);
  if (!result) {
    return res.status(400).json({ message: '"categoryIds" not found' });
  }
  return res.status(201).json(result);
};

module.exports = {
  createPost,
};