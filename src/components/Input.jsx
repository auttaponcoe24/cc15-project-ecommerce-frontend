import { Input } from "@material-tailwind/react";

export default function InputDefault({
	color,
	variant,
	label,
	placeholder,
	onChange,
	value,
	type = "text",
	name,
	hasError,
}) {
	return (
		<div className={`w-full`}>
			<Input
				size="md"
				color={color}
				variant={variant}
				label={label}
				type={type}
				placeholder={placeholder}
				value={value}
				onChange={onChange}
				name={name}
				error={hasError && true}
			/>
		</div>
	);
}
