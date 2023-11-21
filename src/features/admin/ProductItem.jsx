import React, { useState } from "react";
import { useProduct } from "../../hooks/use-product";
import { toast } from "react-toastify";

export default function ProductItem({
	name,
	productId,
	price,
	category,
	open,
}) {
	const { deleteProduct, editProduct, setIsOpen } = useProduct();

	const handleDeleteProduct = () => {
		deleteProduct(productId);
		// toast.warning("Delete Product");
	};

	return (
		<div className="flex items-center justify-between">
			<div className="flex justify-between w-full">
				<div>{name}</div>
				<div>{price}</div>
				<div className="mr-[450px]">{category}</div>
			</div>
			<div className="flex gap-4">
				{/* <button
					onClick={() => open(true)}
					className="border rounded-md shadow-md bg-white px-4 py-2"
				>
					Edit
				</button> */}

				<button
					onClick={handleDeleteProduct}
					className="border rounded-md shadow-md bg-red-400 text-white px-4 py-2 hover:bg-red-600"
				>
					Delete
				</button>
			</div>
		</div>
	);
}
