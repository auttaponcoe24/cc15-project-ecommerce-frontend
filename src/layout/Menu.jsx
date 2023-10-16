import MenuItem from "./MenuItem";

export default function Menu() {
	const menus = [
		{ id: 1, to: "/", text: "HOME" },
		{ id: 2, to: "/category", text: "PRODUCT" },
		{ id: 3, to: "/about", text: "ABOUT US" },
		{ id: 4, to: "/contact", text: "CONTACT US" },
	];
	return (
		<nav className="flex justify-between items-center gap-2 ">
			{menus.map((item) => (
				<MenuItem key={item.id} to={item.to} text={item.text} />
			))}
		</nav>
	);
}
