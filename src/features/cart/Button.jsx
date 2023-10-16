import React from "react";

export default function Button({ onClick, children, style }) {
	return (
		<button
			onClick={onClick}
			className={`${style} w-full py-2 px-4 rounded-full shadow-md flex items-center justify-center gap-2 
            hover:text-red-500 `}
		>
			<span>{children}</span>
		</button>
	);
}
