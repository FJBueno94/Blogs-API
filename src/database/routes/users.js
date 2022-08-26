const { Router } = require('express');

const userController = require('../controllers/users');
const validation = require('../middlewares/validation');
// const tokenValidation = require('../middlewares/tokenAuth');

const router = Router();

router.post('/login', validation.loginValidation, userController.login);

module.exports = router;
