import Button from "./Button";
import { useState } from "react";
import { useAuth } from "../../hooks/use-auth";
import Input from "../../components/Input";
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
				<h1 className="text-xl text-center font-semibold">LOGIN</h1>
				<div className="flex flex-col gap-4 mt-4">
					<div>
						<div>
							<Input
								value={input.emailOrUsername}
								label={`Email / Username`}
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
						<div>
							<Input
								type="password"
								label={`Password`}
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
