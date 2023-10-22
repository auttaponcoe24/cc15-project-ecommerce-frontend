import React from "react";
import { useLocation } from "react-router-dom";
import MenuItem from "./MenuItem";
import { AiOutlineHome } from "react-icons/ai";
import { BsBorderWidth, BsShop } from "react-icons/bs";
import { HiOutlineArchiveBox } from "react-icons/hi2";

const menuAdmin = [
	{
		id: 1,
		to: "/admin",
		text: "Dashboard",
		icon: <AiOutlineHome />,
	},
	{
		id: 2,
		to: "/admin/orders",
		text: "Orders",
		icon: <BsBorderWidth />,
	},
	{
		id: 3,
		to: "/admin/products",
		text: "Products",
		icon: <HiOutlineArchiveBox />,
	},
];

export default function Menu() {
	const { pathname } = useLocation();
	return (
		<nav className="flex flex-col gap-2 w-full py-2 px-2">
			<div className="flex items-center gap-2 px-2 text-lg text-gray-400">
				<div>
					<BsShop />
				</div>
				<h1>Ecommerce</h1>
			</div>
			{menuAdmin.map((items) => (
				<MenuItem
					key={items.id}
					to={items.to}
					text={items.text}
					icon={items.icon}
					active={pathname === items.to}
				/>
			))}
		</nav>
	);
}
