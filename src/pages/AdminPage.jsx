import React from "react";
import { useAuth } from "../hooks/use-auth";

export default function AdminPage() {
	const { authUser } = useAuth();
	// console.log(authUser.firstName);
	return (
		<div className="flex flex-col pl-6 gap-6 h-screen bg-slate-100">
			<div className="my-4 ">
				<div>
					Hello,
					<span className="text-2xl font-semibold text-blue-800">
						{authUser.firstName}
					</span>
				</div>
			</div>
			<div>
				<div className="text-2xl mb-4">Orders</div>
				<div className="flex gap-4">
					<div className="border bg-white shadow-lg flex flex-col items-center gap-4 p-4 w-[200px]">
						<div className="text-gray-500 font-semibold">TODAY</div>
						<div className="text-6xl font-semibold text-blue-800">
							16
						</div>
						<small className="text-gray-400">16 orders today</small>
					</div>
					<div className="border bg-white shadow-lg flex flex-col items-center gap-4 p-4 w-[200px]">
						<div className="text-gray-500 font-semibold">
							THIS WEEK
						</div>
						<div className="text-6xl font-semibold text-blue-800">
							16
						</div>
						<small className="text-gray-400">16 orders week</small>
					</div>
				</div>
			</div>
		</div>
	);
}
