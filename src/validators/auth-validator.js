import Joi from "joi";

export const loginSchema = Joi.object({
	emailOrUsername: Joi.string()
		.trim()
		// .pattern(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3,15}$/)
		.required(),
	password: Joi.string().trim().required(),
});

export const registerSchema = Joi.object({
	firstName: Joi.string().trim().required(),
	lastName: Joi.string().trim().required(),
	emailOrUsername: Joi.alternatives([
		Joi.string().email({ tlds: false }),
		Joi.string().pattern(/^[a-zA-Z0-9]{3,10}$/),
	]).required(),
	password: Joi.string()
		.pattern(/^[a-zA-Z0-9]{6,30}$/)
		.trim()
		.required(),
	confirmPassword: Joi.string().valid(Joi.ref("password")).trim().required(),
	address: Joi.string().trim().required(),
});
