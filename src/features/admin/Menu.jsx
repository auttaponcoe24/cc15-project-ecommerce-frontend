import React from "react";
import { useLocation } from "react-router-dom";
import MenuItem from "./MenuItem";

const menuAdmin = [
	{
		id: 1,
		to: "/admin",
		text: "HOME",
	},
	{
		id: 2,
		to: "/admin/orders",
		text: "ORDERS",
	},
	{
		id: 3,
		to: "/admin/products",
		text: "PRODUCTS",
	},
];

export default function Menu() {
	const { pathname } = useLocation();
	return (
		<nav className="flex flex-col gap-2 w-full">
			{menuAdmin.map((items) => (
				<MenuItem
					key={items.id}
					to={items.to}
					text={items.text}
					active={pathname === items.to}
				/>
			))}
		</nav>
	);
}
