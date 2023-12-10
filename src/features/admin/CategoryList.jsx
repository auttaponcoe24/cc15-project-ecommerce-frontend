import React from "react";
import CategoryItem from "./CategoryItem";

export default function CategoryList({ data }) {
	return (
		<>
			<div className="flex flex-col gap-4 rounded-md bg-white">
				{data.map((item, index) => (
					<div key={index}>
						<CategoryItem objProduct={item} id={item.id} name={item.name} />
					</div>
				))}
			</div>
		</>
	);
}
