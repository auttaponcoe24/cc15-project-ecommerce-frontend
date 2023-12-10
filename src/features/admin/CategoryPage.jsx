import React from "react";
import { CategoryAdd } from "./CategoryAdd";
import { useProduct } from "../../hooks/use-product";
import CategoryList from "./CategoryList";

export default function CategoryPage() {
	const { fatchCategory } = useProduct();
	return (
		<div className="">
			<div className="flex flex-col m-4 gap-2">
				<div className="self-start">
					<CategoryAdd />
				</div>

				<div className="flex flex-col gap-2">
					<div className="max-w-[1024px] grid grid-cols-12  justify-items-start pl-16 text-lg bg-blue-gray-600 text-white font-semibold px-2 py-2 rounded-lg">
						<div className="col-span-3">ID</div>
						<div className="col-span-9">Category Name</div>
					</div>
					<hr className="max-w-[1024px]" />

					<CategoryList data={fatchCategory} />
				</div>
			</div>
		</div>
	);
}
