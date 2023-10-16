import React from "react";
import ProductList from "../features/product/ProductList";
import { useProduct } from "../hooks/use-product";

export default function Category() {
	const { getProduct } = useProduct();
	return (
		<>
			<div className="max-w-4xl mx-auto my-4 flex flex-col items-center">
				<div className="text-5xl font-bold my-2">...Product..</div>
				<ProductList data={getProduct} />
			</div>
		</>
	);
}
