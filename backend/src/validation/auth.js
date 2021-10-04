const Joi = require("joi");

const signUpValidation = (data) => {
	const schema = Joi.object({
		username: Joi.string().required(),
		email: Joi.string().email().required(),
		password: Joi.string().min(6).required(),
	});

	return schema.validate(data);
};

const signInValidation = (data) => {
	const schema = Joi.object({
		email: Joi.string().email().required(),
		password: Joi.string().min(6).required(),
	});

	return schema.validate(data);
};

module.exports = {
	signUpValidation,
	signInValidation,
};
