import React, { useState } from "react";
import ProductItem from "./ProductItem";

export default function ProductList({ data }) {
	const [isOpen, setIsOpen] = useState(false);
	console.log("admin", data);
	return (
		<>
			{/* {isOpen && <div className="bg-slate-200">fadjkl;fjasdlk</div>} */}
			<div className="flex flex-col gap-4 rounded-md bg-white p-4 pr-8">
				{data.map((item, index) => (
					<div key={index}>
						<ProductItem
							objProduct={item}
							name={item.name}
							price={item.price}
							category={item.category.name}
							productId={item.id}
							open={setIsOpen}
						/>
					</div>
				))}
			</div>
		</>
	);
}
