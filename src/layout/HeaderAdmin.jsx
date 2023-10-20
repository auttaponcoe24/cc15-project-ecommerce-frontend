import React from "react";
import Menu from "../features/admin/Menu";

export default function HeaderAdmin() {
	return (
		<aside className="bg-blue-950 h-screen sticky top-0 z-30 col-span-2">
			<div className="flex flex-col items-center">
				<Menu />
			</div>
		</aside>
	);
}
