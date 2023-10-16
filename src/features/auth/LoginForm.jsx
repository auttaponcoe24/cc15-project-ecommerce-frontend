import LoginInput from "./LoginInput";
import Button from "./Button";
import { useState } from "react";
import { useAuth } from "../../hooks/use-auth";

import { loginSchema } from "../../validators/auth-validator";
import InputErrorMessage from "./InputErrorMessage";

const validateLogin = (input) => {
	const { error } = loginSchema.validate(input, { abortEarly: false });
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

export default function LoginForm() {
	const [error, setError] = useState({});

	const [input, setInput] = useState({
		emailOrUsername: "",
		password: "",
	});

	const { login } = useAuth();

	const handleSubmitForm = (e) => {
		e.preventDefault();
		const validationError = validateLogin(input);
		if (validationError) {
			return setError(validationError);
		}
		setError({});

		login(input).catch((err) => {
			// console.log("err", err);
			setError({ messageError: err.response?.data?.message });
		});
	};

	return (
		<>
			<form onSubmit={handleSubmitForm}>
				<h1 className="text-xl font-semibold">LOGIN</h1>
				<div className="grid gap-4 mt-4">
					<div>
						<h2 className="mb-2">Email / Username</h2>
						<div>
							<LoginInput
								value={input.emailOrUsername}
								onChange={(e) =>
									setInput({
										...input,
										emailOrUsername: e.target.value,
									})
								}
								hasError={error.emailOrUsername}
							/>
							{error.emailOrUsername && (
								<InputErrorMessage
									message={error.emailOrUsername}
								/>
							)}
						</div>
					</div>
					<div>
						<h2 className="mb-2">Password</h2>
						<div>
							<LoginInput
								type="password"
								value={input.password}
								onChange={(e) =>
									setInput({
										...input,
										password: e.target.value,
									})
								}
								hasError={error.password}
							/>
							{error.password && (
								<InputErrorMessage message={error.password} />
							)}
							{error.messageError && (
								<InputErrorMessage
									message={error.messageError}
								/>
							)}
						</div>
					</div>
					<div>
						<Button
							text="Log In"
							style="bg-orange-400 hover:text-white"
						/>
					</div>
				</div>
			</form>
		</>
	);
}
