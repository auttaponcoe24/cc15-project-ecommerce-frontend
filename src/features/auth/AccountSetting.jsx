import React from "react";
import EditAccount from "./EditAccount";
import { useAuth } from "../../hooks/use-auth";

export default function AccountSetting() {
	const { authUser } = useAuth();
	return (
		<div className="grid grid-cols-12 ">
			<div className="col-span-3"></div>
			<div className="col-span-9 h-[87vh] flex justify-evenly items-center max-md:flex-col gap-6 p-4">
				<div className="border px-4 py-2 rounded-md bg-slate-100 ">
					<div className="flex flex-col gap-4 w-full">
						<h1 className="text-3xl font-semibold text-center">
							My Profile
						</h1>
						<hr className="border border-red-400 " />
						<div className="flex flex-col gap-4">
							<div className="flex">
								<h1 className="text-xl font-semibold mr-[150px]">
									First Name
								</h1>
								<div className="text-lg">
									{authUser.firstName}
								</div>
							</div>
							<div className="flex">
								<h1 className="text-xl font-semibold mr-[150px]">
									Last Name
								</h1>
								<div className="text-lg">
									{authUser.lastName}
								</div>
							</div>
							<div className="flex">
								<h1 className="text-xl font-semibold mr-[85px]">
									UserName / Email
								</h1>
								<div className="text-lg">
									{authUser.username || authUser.email}
								</div>
							</div>
							<div className="flex">
								<h1 className="text-xl font-semibold mr-[170px]">
									Address
								</h1>
								<div className="text-lg">
									{authUser.address}
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* EditAccount Form */}
				<EditAccount />
			</div>
		</div>
	);
}
