import { useState } from "react";
import { useAuth } from "../../hooks/use-auth";
import Button from "./Button";
import Joi from "joi";
import Input from "../../components/Input";
import InputErrorMessage from "./InputErrorMessage";

const registerSchema = Joi.object({
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

const validateRegister = (input) => {
	const { error } = registerSchema.validate(input, {
		abortEarly: false,
	});
	// console.dir(error);

	if (error) {
		const result = error.details.reduce((acc, el) => {
			const { message, path } = el;
			acc[path[0]] = message;
			return acc;
		}, {});
		return result;
	}
};

export default function RegisterForm() {
	const { register } = useAuth();

	const [input, setInput] = useState({
		firstName: "",
		lastName: "",
		emailOrUsername: "",
		password: "",
		confirmPassword: "",
		address: "",
	});

	const [error, setError] = useState({});

	const handleChangeInput = (e) => {
		setInput({ ...input, [e.target.name]: e.target.value });
	};

	const handleOnSubmit = (e) => {
		e.preventDefault();
		const validationError = validateRegister(input);
		if (validationError) {
			return setError(validationError);
		}
		setError({});

		register(input).catch((err) => console.log(err));
	};

	return (
		<form className="flex flex-col gap-4" onSubmit={handleOnSubmit}>
			<h1 className="text-xl font-semibold text-center">Sign Up</h1>
			<div>
				<Input
					label={`Email / Username`}
					value={input.emailOrUsername}
					onChange={handleChangeInput}
					name="emailOrUsername"
					hasError={error.emailOrUsername}
				/>
			</div>
			{error.emailOrUsername && (
				<InputErrorMessage message={error.emailOrUsername} />
			)}

			<div>
				<Input
					label={`Password`}
					type="password"
					value={input.password}
					onChange={handleChangeInput}
					name="password"
					hasError={error.password}
				/>
			</div>

			{error.password && <InputErrorMessage message={error.password} />}

			<div>
				<Input
					label={`Confirm Password`}
					type="password"
					onChange={handleChangeInput}
					name="confirmPassword"
					hasError={error.confirmPassword}
				/>
			</div>

			{error.confirmPassword && (
				<InputErrorMessage message={error.confirmPassword} />
			)}

			<div>
				<Input
					label={`First Name`}
					onChange={handleChangeInput}
					name="firstName"
					hasError={error.firstName}
				/>
			</div>

			{error.firstName && <InputErrorMessage message={error.firstName} />}

			<div>
				<Input
					label={`Last Name`}
					onChange={handleChangeInput}
					name="lastName"
					hasError={error.lastName}
				/>
			</div>

			{error.lastName && <InputErrorMessage message={error.lastName} />}

			<div>
				<Input
					label={`Address`}
					onChange={handleChangeInput}
					name="address"
					hasError={error.address}
				/>
			</div>

			{error.address && <InputErrorMessage message={error.address} />}

			<Button text="Sign Up" style="bg-blue-500 text-white" />
		</form>
	);
}
