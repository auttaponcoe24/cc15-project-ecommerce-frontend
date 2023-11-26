import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useProduct } from "../../hooks/use-product";
import ProductList from "./ProductList";

export default function Products() {
	const { fetchProduct, getProduct } = useProduct();
	// console.log(getProduct);
	useEffect(() => {
		fetchProduct();
	}, []);
	return (
		<div className="">
			<div className="flex flex-col m-4 gap-2">
				<Link to="/admin/products/add" className="self-start">
					<button className="rounded-md text-white py-2 px-2 t bg-purple-500">
						Add new product
					</button>
				</Link>
				<div className="flex flex-col gap-2">
					<div className="max-w-[1024px] grid grid-cols-12  justify-items-center text-lg bg-blue-gray-600 text-white font-semibold px-2 py-2 rounded-lg">
						<div className="col-span-3">Product Name</div>
						<div className="col-span-3">Price</div>
						<div className="col-span-3">Category Name</div>
						<div className="col-span-3">{``}</div>
					</div>
					<hr className="max-w-[1024px]" />

					<ProductList data={getProduct} />
				</div>
			</div>
		</div>
	);
}
