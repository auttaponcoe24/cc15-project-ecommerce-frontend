import React from "react";
import EditAccount from "./EditAccount";

export default function AccountSetting() {
	return (
		<div className="grid grid-cols-12 ">
			<div className="col-span-3">2</div>
			<div className="col-span-9 h-[87vh] flex justify-center items-center">
				<EditAccount />
			</div>
		</div>
	);
}
