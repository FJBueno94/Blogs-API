const { Router } = require('express');

const blogPost = require('../controllers/blogPost');
const { createPostValidation, validCategory } = require('../middlewares/validation');
const tokenValidation = require('../middlewares/tokenAuth');

const router = Router();

router.post(
  '/post',
  createPostValidation,
  validCategory,
  tokenValidation,
  blogPost.createPost,
);

module.exports = router;