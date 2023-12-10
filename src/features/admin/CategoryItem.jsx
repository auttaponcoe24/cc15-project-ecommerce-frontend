import React, { useState } from "react";

export default function CategoryItem({ id, name }) {
	return (
		<div className="">
			<div className="max-w-[1024px] grid grid-cols-12  justify-items-start pl-16 text-lg font-semibold px-2 py-2 rounded-lg">
				<div className="col-span-3">{id}</div>
				<div className="col-span-9">{name}</div>
			</div>
		</div>
	);
}
