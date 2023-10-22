import React from "react";
import { useProduct } from "../../hooks/use-product";

export default function ProductItem({ name, productId }) {
	const { deleteProduct } = useProduct();
	return (
		<div className="flex items-center justify-between">
			<div>{name}</div>
			<div className="flex gap-4">
				<button className="border rounded-md shadow-md bg-white px-4 py-2">
					Edit
				</button>
				<button
					onClick={() => deleteProduct(productId)}
					className="border rounded-md shadow-md bg-red-400 text-white px-4 py-2 hover:bg-red-600"
				>
					Delete
				</button>
			</div>
		</div>
	);
}
