import React from "react";

export default function LoginInput({
	type = "text",
	placeholder,
	value,
	onChange,
	hasError,
}) {
	return (
		<input
			className={`block w-full rounded-md px-3 py-3 outline-none border border-gray-300
			${hasError && "border border-red-500"}
			`}
			type={type}
			placeholder={placeholder}
			value={value}
			onChange={onChange}
		/>
	);
}
