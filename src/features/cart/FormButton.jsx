export default function FormButton({ children, onClick }) {
	return (
		<button
			className="px-3 py-1.5 text-blue-600 font-semibold hover:bg-gray-100 hover:text-red-400 rounded-md"
			onClick={onClick}
		>
			{children}
		</button>
	);
}
