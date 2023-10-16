export default function Button({ text, style }) {
	return (
		<button
			className={`${style} w-full rounded-md text-xl font-bold py-2.5`}
		>
			{text}
		</button>
	);
}
