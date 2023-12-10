import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/use-auth";

export default function MenuItem({ to, active, text, icon }) {
	const { logout } = useAuth();
	const navigate = useNavigate();

	const handleClick = () => {
		navigate(`/`);
		logout();
	};
	return (
		<>
			{text === "Logout" ? (
				<>
					<button onClick={handleClick}>
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
					</button>
				</>
			) : (
				<>
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
				</>
			)}
		</>
	);
}
