import React from "react";
import { Link } from "react-router-dom";

export default function MenuItem({ to, active, text }) {
	return (
		<Link to={to}>
			<div
				className={`${
					active ? "bg-orange-400" : ""
				} px-2 py-4 w-full text-center hover:bg-gray-100 hover:text-blue-600 text-white text-1xl font-semibold `}
			>
				<div>
					<h1>{text}</h1>
				</div>
			</div>
		</Link>
	);
}
