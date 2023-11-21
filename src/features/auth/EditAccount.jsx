import React, { useState } from "react";
import { useAuth } from "../../hooks/use-auth";
import Loading from "../../components/Loading";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

export default function EditAccount() {
	const { editAccount, authUser } = useAuth();
	console.log(authUser);

	const [loading, setLoading] = useState(false);

	const [input, setInput] = useState({
		firstName: "",
		lastName: "",
		address: "",
	});

	const handleOnSubmit = (e) => {
		try {
			e.preventDefault();
			if (input.firstName === "") {
				input.firstName = authUser.firstName;
			}
			if (input.lastName === "") {
				input.lastName = authUser.lastName;
			}
			if (input.address === "") {
				input.address = authUser.address;
			}
			setLoading(true);
			editAccount(input);
			// alert("Edit Success");
		} catch (err) {
			console.log(err);
		} finally {
			setLoading(false);
			// toast.success("Edit Access Success");
			Swal.fire({
				position: "center",
				icon: "success",
				title: "Edit Access Success",
				showConfirmButton: false,
				timer: 1500,
			});
		}
	};
	return (
		<>
			{loading && <Loading />}
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
						placeholder={authUser.firstName}
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
						placeholder={authUser.lastName}
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
						placeholder={authUser.address}
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
