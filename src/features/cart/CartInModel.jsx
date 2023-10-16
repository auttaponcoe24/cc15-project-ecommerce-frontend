import React from "react";
import Button from "./Button.jsx";
import { Link } from "react-router-dom";

export default function CartForm({ name, price, image, onClose }) {
	return (
		<>
			<div className="flex justify-start items-center gap-4">
				<div>
					<img src={image} alt={name} width={120} />
				</div>
				<div className="flex flex-col gap-6 justify-between w-full">
					<h1 className="font-semibold">{name}</h1>
					<div>
						<div className="flex justify-between font-semibold">
							<div>
								{price} <span>THB</span>
							</div>
							<div>amount : 1</div>
						</div>
					</div>
				</div>
			</div>
			<hr className="my-2" />
			<div className="flex gap-2">
				<Button style="bg-white text-black" onClick={onClose}>
					เลือกสินค้าต่อ
				</Button>
				<Link
					className="bg-gray-700 text-white w-full py-2 px-4 rounded-full shadow-md flex items-center justify-center gap-2 hover:text-red-500 "
					to="/cart"
				>
					ดูสินค้าในตะกร้า
				</Link>
			</div>
		</>
	);
}
