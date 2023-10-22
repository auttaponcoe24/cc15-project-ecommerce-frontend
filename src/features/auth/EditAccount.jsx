import React, { useState } from "react";
import { useAuth } from "../../hooks/use-auth";

export default function EditAccount() {
	const { editAccount } = useAuth();
	const [input, setInput] = useState({
		firstName: "",
		lastName: "",
		address: "",
	});

	const handleOnSubmit = (e) => {
		try {
			e.preventDefault();
			editAccount(input);
			alert("Edit Success");
		} catch (err) {
			console.log(err);
		}
	};
	return (
		<>
			<form
				onSubmit={handleOnSubmit}
				className="border flex flex-col gap-4 p-6 rounded-lg shadow-md"
			>
				<div className="flex flex-col gap-2 items-center">
					<label className="w-full text-xl font-semibold">
						First Name :
					</label>
					<input
						className="outline-none bg-slate-200 rounded-lg w-full px-2 py-2 text-lg"
						type="text"
						name="firstName"
						value={input.firstName}
						onChange={(e) =>
							setInput({
								...input,
								[e.target.name]: e.target.value,
							})
						}
					/>
				</div>
				<div className="flex flex-col gap-2 items-center">
					<label className="w-full text-xl font-semibold">
						Last Name :
					</label>
					<input
						className="outline-none bg-slate-200 rounded-lg w-full px-2 py-2 text-lg"
						type="text"
						name="lastName"
						value={input.lastName}
						onChange={(e) =>
							setInput({
								...input,
								[e.target.name]: e.target.value,
							})
						}
					/>
				</div>
				<div className="flex flex-col gap-2 items-center">
					<label className="w-full text-xl font-semibold">
						Address :
					</label>
					<textarea
						className="outline-none bg-slate-200 rounded-lg w-full px-2 py-2 text-lg"
						name="address"
						value={input.address}
						onChange={(e) =>
							setInput({
								...input,
								[e.target.name]: e.target.value,
							})
						}
						id=""
						cols="50"
					></textarea>
				</div>
				<button
					className="bg-purple-500 text-white px-2 py-3 rounded-lg mx-auto w-full hover:bg-purple-400 hover:text-red-800 shadow-lg"
					type="submit"
				>
					Edit Account
				</button>
			</form>
		</>
	);
}
