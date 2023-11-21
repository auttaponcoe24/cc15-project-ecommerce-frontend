import React from "react";
import { useAuth } from "../hooks/use-auth";

export default function MyAccountPage() {
	const { authUser } = useAuth();
	// console.log(authUser);
	return (
		<div className="grid grid-cols-12 ">
			<div className="col-span-3"></div>
			<div className="col-span-9">
				<div className="h-[86vh] flex justify-start items-center ml-4">
					<div className="flex flex-col gap-4 w-full">
						<h1 className="text-3xl font-semibold">My Profile</h1>
						<hr className="mr-20 " />
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
			</div>
		</div>
	);
}
