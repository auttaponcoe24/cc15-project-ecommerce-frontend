import React, { useRef, useState } from "react";
import { useProduct } from "../../hooks/use-product";
import Loading from "../../components/Loading";
import picblank from "../../assets/image/blankImage.png";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function ProductAdd() {
	const { fatchCategory, createProduct } = useProduct();
	console.log(fatchCategory);

	const navigate = useNavigate();
	const [loading, setLoading] = useState(false);

	const [input, setInput] = useState({
		categoryId: 1,
		name: "",
		detail: "",
		price: "",
	});

	const [file, setFile] = useState(null);
	if (file) console.log(URL.createObjectURL(file));

	const handleOnSubmit = async (e) => {
		try {
			e.preventDefault();
			const formData = new FormData();
			if (file) {
				formData.append("images", file);
			}
			if (input.categoryId) {
				formData.append("categoryId", input.categoryId);
			}
			if (input.name) {
				formData.append("name", input.name);
			}
			if (input.detail) {
				formData.append("detail", input.detail);
			}
			if (input.price) {
				formData.append("price", input.price);
			}
			setLoading(true);
			await createProduct(formData);
			// alert("CREATED PRODUCT");
		} catch (err) {
			console.log(err);
		} finally {
			setLoading(false);
			navigate(`/admin/products`);
			window.location.reload();
			// toast.success(`CREATED PRODUCT`);
		}
	};

	const inputEl = useRef(null);

	return (
		<div className="flex items-center justify-center h-screen max-w-2xl mx-auto">
			{loading && <Loading />}
			<form
				onSubmit={handleOnSubmit}
				className="flex flex-col gap-4 p-6 rounded-xl shadow-md bg-blue-gray-400 w-full"
			>
				<div className="flex flex-col gap-2">
					<label className="text-lg font-semibold text-white">
						Product Name
					</label>
					<input
						name="name"
						className="outline-none px-2 py-2 w-full bg-slate-100 rounded-lg shadow-sm"
						type="text"
						value={input.name}
						onChange={(e) =>
							setInput({
								...input,
								[e.target.name]: e.target.value,
							})
						}
					/>
				</div>
				<div className="flex flex-col gap-2">
					<label className="text-lg font-semibold text-white">Detail</label>
					<input
						name="detail"
						className="outline-none px-2 py-2 w-full bg-slate-100 rounded-lg shadow-sm"
						type="text"
						value={input.detail}
						onChange={(e) =>
							setInput({
								...input,
								[e.target.name]: e.target.value,
							})
						}
					/>
				</div>
				<div className="flex flex-col gap-2">
					<label className="text-lg font-semibold text-white">Price</label>
					<input
						name="price"
						className="outline-none px-2 py-2 w-full bg-slate-100 rounded-lg shadow-sm"
						type="text"
						value={input.price}
						onChange={(e) =>
							setInput({
								...input,
								[e.target.name]: e.target.value,
							})
						}
					/>
				</div>
				<div className="flex flex-col gap-2">
					<label className="text-lg font-semibold text-white">Category</label>
					<select
						name="categoryId"
						className="bg-slate-100 px-2 py-2 w-full rounded-lg shadow-sm"
						onChange={(e) =>
							setInput({
								...input,
								[e.target.name]: e.target.value,
							})
						}
					>
						<option value="select">Select</option>
						{fatchCategory.map((item, index) => (
							<option
								name="categoryId"
								key={index}
								id={item.id}
								value={item.id}
							>
								{item.name}
							</option>
						))}
					</select>
				</div>

				<div className="flex flex-col gap-2">
					<div className="flex flex-col gap-2 items-center justify-evenly">
						<div
							className="w-[150px] h-[150px] overflow-hidden shadow-md "
							onClick={() => inputEl.current.click()}
						>
							<img
								className="w-full h-full object-contain cursor-pointer"
								src={`${file ? URL.createObjectURL(file) : picblank}`}
								alt="image"
							/>
						</div>

						<input
							type="file"
							className="hidden cursor-pointer"
							ref={inputEl}
							onChange={(e) => {
								if (e.target.files[0]) {
									setFile(e.target.files[0]);
								}
							}}
						/>

						{file ? (
							<div className="flex gap-2">
								{/* <button
									onClick={() => inputEl.current.click()}
									className="bg-blue-500 text-white mx-auto px-4 py-2 rounded-lg shadow-lg my-4 "
								>
									EDIT
								</button> */}
								<button
									className="bg-red-500 mx-auto px-4 py-2 rounded-lg shadow-lg my-4 "
									onClick={() => {
										inputEl.current.value = "";
										setFile(null);
									}}
								>
									CANCEL
								</button>
							</div>
						) : (
							<>
								{/* <button onClick={() => inputEl.current.click()}>
									{!file && "Choose File"}
								</button> */}
							</>
						)}
					</div>
				</div>

				<button
					type="submit"
					className="bg-purple-600 text-white w-full  mx-auto px-4 py-2 rounded-lg shadow-lg my-4 
                    hover:bg-purple-400 hover:text-slate-800 font-semibold text-xl cursor-pointer"
				>
					Add Product
				</button>
			</form>
		</div>
	);
}
