import React from "react";
import ProductItem from "./ProductItem";

export default function ProductList({ data }) {
	return (
		<div className="grid grid-cols-3 gap-4">
			{data.map((item, index) => (
				<div key={index}>
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
