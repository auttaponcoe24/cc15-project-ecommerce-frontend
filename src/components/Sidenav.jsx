import React, { useState } from "react";
import {
	AiOutlineMenu,
	AiOutlineHome,
	AiOutlineProject,
	AiOutlineMail,
	AiOutlineClose,
} from "react-icons/ai";
import { HiOutlineArchiveBox } from "react-icons/hi2";
import { Link } from "react-router-dom";

function Sidenav() {
	const [nav, setNav] = useState(false);
	const handleNav = () => {
		setNav(!nav);
	};

	return (
		<div>
			{nav ? (
				<>
					<AiOutlineClose
						size={20}
						onClick={handleNav}
						className="absolute top-3 right-3 z-[99] hover:text-red-500 md:hidden"
					/>
				</>
			) : (
				<>
					<AiOutlineMenu
						onClick={handleNav}
						className="absolute top-3 left-3 z-[99] md:hidden"
					/>
				</>
			)}

			{nav && (
				<div className="md:hidden fixed w-full left-0 top-0 h-screen bg-slate-700/90 flex flex-col justify-center items-center z-20">
					<Link
						onClick={handleNav}
						to="/"
						className="w-[75%] flex text-blue-900 font-semibold justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
					>
						<AiOutlineHome size={20} />
						<span className="pl-4">Home</span>
					</Link>
					<Link
						onClick={handleNav}
						to="/category"
						className="w-[75%] flex text-blue-900 font-semibold justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
					>
						<HiOutlineArchiveBox size={20} />
						<span className="pl-4">Product</span>
					</Link>
					<Link
						onClick={handleNav}
						to="/about"
						className="w-[75%] flex text-blue-900 font-semibold justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
					>
						<AiOutlineProject size={20} />
						<span className="pl-4">About Us</span>
					</Link>

					<Link
						onClick={handleNav}
						to="/contact"
						className="w-[75%] flex text-blue-900 font-semibold justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
					>
						<AiOutlineMail size={20} />
						<span className="pl-4">Contact Us</span>
					</Link>
				</div>
			)}
		</div>
	);
}

export default Sidenav;
