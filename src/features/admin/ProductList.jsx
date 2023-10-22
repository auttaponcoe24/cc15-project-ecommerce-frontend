import React from "react";
import ProductItem from "./ProductItem";

export default function ProductList({ data }) {
	return (
		<div className="flex flex-col gap-4 rounded-md bg-white p-4 pr-8">
			{data.map((item, index) => (
				<div key={index}>
					<ProductItem
						objProduct={item}
						name={item.name}
						productId={item.id}
					/>
				</div>
			))}
		</div>
	);
}
