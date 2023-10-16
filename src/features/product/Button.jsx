import React from "react";
import { BsCart } from "react-icons/bs";

export default function Button({ onClick, children }) {
	return (
		<button
			onClick={onClick}
			className="text-white bg-gray-700 py-2 px-4 rounded-xl shadow-md flex items-center justify-center gap-2 
            hover:text-red-500"
		>
			<BsCart />
			<span>{children}</span>
		</button>
	);
}
