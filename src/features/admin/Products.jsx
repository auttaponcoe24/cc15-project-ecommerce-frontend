import React from "react";
import { Link } from "react-router-dom";
import { useProduct } from "../../hooks/use-product";
import ProductList from "./ProductList";

export default function Products() {
	const { getProduct } = useProduct();
	// console.log(getProduct);
	return (
		<div className="">
			<div className="flex flex-col m-4 gap-2">
				<Link to="/admin/products/add">
					<button className="self-start rounded-md text-white py-2 px-2 t bg-purple-500">
						Add new product
					</button>
				</Link>

				<div className="bg-white p-2 rounded-md flex items-center justify-between">
					<div>PRODUCT NAME</div>
					<div>PRICE</div>
					<div className="mr-[500px]">CATEGORY NAME</div>
				</div>
				<hr />

				<ProductList data={getProduct} />
			</div>
		</div>
	);
}
