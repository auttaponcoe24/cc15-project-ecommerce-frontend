import React from "react";
import ProductItem from "./ProductItem";

export default function ProductList({ data }) {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
			{data.map((item, index) => (
				<div key={index} className="">
					<ProductItem
						id={item.id}
						name={item.name}
						price={item.price}
						image={item.images}
					/>
				</div>
			))}
		</div>
	);
}
