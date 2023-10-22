import React from "react";
import { Outlet } from "react-router-dom";
import HeaderAdmin from "./HeaderAdmin";

export default function LayoutAdmin() {
	return (
		<div className="grid grid-cols-12 grid-flow-col auto-cols-max">
			<HeaderAdmin />
			<div className="col-span-10 bg-slate-100">
				<Outlet />
			</div>
		</div>
	);
}
