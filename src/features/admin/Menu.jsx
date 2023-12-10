import React from "react";
import { useLocation } from "react-router-dom";
import MenuItem from "./MenuItem";
import { AiOutlineHome } from "react-icons/ai";
import { BsBorderWidth, BsShop } from "react-icons/bs";
import { HiOutlineArchiveBox } from "react-icons/hi2";
import { IoBagCheckSharp } from "react-icons/io5";
import { FaCartPlus } from "react-icons/fa6";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { TbLogout } from "react-icons/tb";
import logo from "../../assets/image/logo.jpeg";

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
		icon: <IoBagCheckSharp />,
	},
	{
		id: 3,
		to: "/admin/products",
		text: "Add product",
		icon: <FaCartPlus />,
	},
	{
		id: 4,
		to: "/admin/category",
		text: "Categories",
		icon: <BiSolidCategoryAlt />,
	},
	{
		id: 5,
		// to: "/admin/category",
		text: "Logout",
		icon: <TbLogout />,
	},
];

export default function Menu() {
	const { pathname } = useLocation();
	return (
		<nav className="flex flex-col gap-2 w-full py-2 px-2">
			<div className="flex items-center justify-around gap-4 py-2 px-2 text-lg text-gray-400 mb-6 mt-2">
				<div className="w-16 h-16 rounded-full overflow-hidden shadow-md">
					<img src={logo} alt="logo" className="object-cover" />
				</div>
				<div className="flex flex-col">
					<h1 className="text-primary font-semibold text-2xl">ADMIN</h1>
					<small className="text-gray-500">ecommerce</small>
				</div>
			</div>
			<div className="flex flex-col gap-4">
				{menuAdmin.map((items) => (
					<MenuItem
						key={items.id}
						to={items.to}
						text={items.text}
						icon={items.icon}
						active={pathname === items.to}
					/>
				))}
			</div>
		</nav>
	);
}
