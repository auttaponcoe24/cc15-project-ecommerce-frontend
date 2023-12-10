import React from "react";
import { Link } from "react-router-dom";

export default function MenuItem({ to, active, text, icon }) {
	return (
		<Link to={to}>
			<div
				className={`${
					active ? "bg-purple-100 text-primary" : ""
				}  rounded-lg px-2 py-2 w-full text-center hover:bg-gray-300 hover:text-white text-black text-1xl font-semibold `}
			>
				<div className="flex items-center gap-2">
					<div className={`${active ? "text-primary" : "text-gray-400"}`}>
						{icon}
					</div>
					<h1 className={`${active ? "text-primary" : "text-gray-700"}`}>
						{text}
					</h1>
				</div>
			</div>
		</Link>
	);
}
