const joi = require('joi');

const loginSchema = joi.object({
  email: joi.string().required().messages(
    { 'string.empty': 'Some required fields are missing' },
  ),
  password: joi.string().required().messages(
    { 'string.empty': 'Some required fields are missing' },
  ),
});

const loginValidation = (req, res, next) => {
  const { email, password } = req.body;
  const { error } = loginSchema.validate({ email, password });
  if (error) {
    return res.status(400).json({ message: error.message });
  }
  next();
};

module.exports = {
  loginValidation,
};
