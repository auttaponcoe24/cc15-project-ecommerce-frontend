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
		<div className="">
			<div className="max-w-[1024px] grid grid-cols-12  justify-items-center text-lg font-semibold px-2 py-2 rounded-lg">
				<div className="col-span-3">{name}</div>
				<div className="col-span-3">{price}</div>
				<div className="col-span-3">{category}</div>
				<div className="col-span-3">
					{/* <button
					onClick={() => open(true)}
					className="border rounded-md shadow-md bg-white px-4 py-2"
				>
					Edit
				</button> */}

					<button
						onClick={handleDeleteProduct}
						className="border rounded-lg shadow-md bg-red-400 text-white px-2 py-1 hover:bg-red-600"
					>
						Delete
					</button>
				</div>
			</div>
		</div>
	);
}
