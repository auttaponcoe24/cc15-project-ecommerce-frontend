import React, { useEffect, useState, useRef } from "react";
import { useAuth } from "../hooks/use-auth";
import { TbLogout } from "react-icons/tb";

export default function Dropdown() {
	const { authUser, logout } = useAuth();

	const [isOpen, setIsOpen] = useState(false);

	const dropdownEl = useRef(null);

	useEffect(() => {
		const handleClickOutside = (e) => {
			if (!dropdownEl.current?.contains(e.target)) {
				setIsOpen(false);
			}
		};

		document.addEventListener("click", handleClickOutside);
		return () => document.removeEventListener("click", handleClickOutside);
	}, []);

	return (
		<div className="relative text-black" ref={dropdownEl}>
			<div
				className="cursor-pointer text-white hover:text-orange-500"
				onClick={() => setIsOpen(!isOpen)}
			>
				{authUser.firstName}
			</div>

			{isOpen && (
				<div className="absolute w-[10rem] bg-white right-0 translate-y-1 border rounded-xl shadow-xl p-2">
					<div className="flex flex-col items-end justify-center ">
						<div className="cursor-pointer hover:text-orange-500">
							My Cart
						</div>
						<div className="cursor-pointer hover:text-orange-500">
							Edit Profile
						</div>
					</div>

					<hr className="m-2 border" />
					<div
						onClick={logout}
						className="flex justify-end items-center gap-4 cursor-pointer hover:text-orange-500 rounded-xl"
					>
						<div className="font-semibold text-sm">Log Out</div>
						<div className="bg-gray-300 h-9 aspect-square rounded-full flex items-center justify-center">
							<TbLogout />
						</div>
					</div>
				</div>
			)}
		</div>
	);
}
