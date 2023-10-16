import React from "react";
import { Link } from "react-router-dom";

export default function MenuItem({ to, text }) {
	return (
		<Link to={to}>
			<div className="text-white hover:text-orange-500">{text}</div>
		</Link>
	);
}
