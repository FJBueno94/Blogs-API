const { Router } = require('express');

const categoryController = require('../controllers/category');
const validation = require('../middlewares/validation');
const tokenValidation = require('../middlewares/tokenAuth');

const router = Router();

router.post('/categories',
  validation.createCategoryValidation,
  tokenValidation,
  categoryController.createCategory);

module.exports = router;