import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import blankpayment from "../../assets/image/blankpayment.png";
import Loading from "../../components/Loading";
import { useProduct } from "../../hooks/use-product";
import FormButton from "./FormButton";
import Model from "../../components/Model";
import Button from "./Button";

export default function OrderForm({
	changeStatusUploadSlip,
	createOrderItem,
	numOrderId,
	deleteCartAll,
}) {
	// setStatusOrder
	const { statusOrder, setStatusOrder } = useProduct();
	const [isOpen, setIsOpen] = useState(false);
	const [file, setFile] = useState(null);
	const [loading, setLoading] = useState(false);
	const fileEl = useRef(null);

	const handleSubmitClick = async () => {
		try {
			const formData = new FormData();
			if (file) {
				formData.append("slipImage", file);
			}

			setLoading(true);
			await changeStatusUploadSlip(formData);
			createOrderItem(numOrderId);
			deleteCartAll();
			setIsOpen(true);
		} catch (err) {
			console.log(err);
		} finally {
			setLoading(false);
		}
	};

	return (
		<>
			{loading && <Loading />}
			<div className="flex flex-col items-center gap-4 mt-12 ">
				{/* <h5 className="text-xl font-bold">Payment</h5> */}
				{file ? (
					<div
						className="cursor-pointer w-[200px] h-[350px] border shadow-sd flex items-center justify-center p-4"
						onClick={() => fileEl.current.click()}
					>
						<img
							src={URL.createObjectURL(file)}
							className="h-full"
							alt="slip"
						/>
					</div>
				) : (
					<div
						className="cursor-pointer w-[200px] h-[200px] border shadow-md"
						onClick={() => fileEl.current.click()}
					>
						<img src={blankpayment} alt="blankpayment" />
					</div>
				)}

				<input
					type="file"
					className="hidden"
					ref={fileEl}
					onChange={(e) => {
						if (e.target.files[0]) {
							setFile(e.target.files[0]);
						}
					}}
				/>

				<div>
					<div className="flex gap-2">
						{/* <button>Save</button>
					<button>Cancel</button> */}
						{file && (
							<>
								<FormButton onClick={() => handleSubmitClick()}>
									save
								</FormButton>
								<FormButton
									onClick={() => {
										fileEl.current.value = "";
										setFile(null);
									}}
								>
									cancel
								</FormButton>
							</>
						)}
					</div>
				</div>
				<Model
					open={isOpen}
					onClose={() => setIsOpen(false)}
					title={`Your order is confirmed`}
				>
					<Link to="/">
						<Button
							onClick={() => setIsOpen(false)}
							style={`bg-gray-500 text-white `}
						>
							Return to shop
						</Button>
					</Link>
				</Model>
			</div>
		</>
	);
}
