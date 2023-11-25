import React, { useEffect, useState } from "react";
import UserInfo from "./UserInfo";
import { useProduct } from "../../hooks/use-product";
import Swal from "sweetalert2";
import Loading from "../../components/Loading";

export default function OrdersItem({
	objOrder,
	id,
	date,
	arrProduct,
	arrAmount,
	arrPrice,
	name,
	address,
	status,
}) {
	const { panddingChangeSuccess, fetchOrder } = useProduct();
	const [loading, setLoading] = useState(false);

	const handleChangeStatus = () => {
		try {
			setLoading(true);
			panddingChangeSuccess(id);
		} catch (err) {
			console.log(err);
		} finally {
			setLoading(false);
			Swal.fire({
				position: "center",
				icon: "success",
				title: "Edit Access Success",
				showConfirmButton: false,
				timer: 1500,
			});

			// window.location.reload();
		}
	};

	return (
		<>
			{loading && <Loading />}
			<div className="grid grid-cols-6 justify-items-center text-xl py-2 px-2 mb-1 rounded-lg shadow-md bg-white">
				{/* <div>{id}</div> */}
				<div className="">{date}</div>
				<div>
					<div>{name}</div>
					<div>{address}</div>
				</div>
				<div>
					{arrProduct?.map((item, index) => (
						<div key={index}>{item?.product?.name}</div>
					))}
				</div>
				<div>
					{arrAmount?.map((item, index) => (
						<div key={index}>{item?.amount}</div>
					))}
				</div>
				<div>
					{arrPrice?.map((item, index) => (
						<div key={index}>{item?.price}</div>
					))}
				</div>
				<div>
					{status === "SUCCESS" ? (
						<>
							<div className="text-green-600">{status}</div>
						</>
					) : (
						<>
							<button
								className="text-red-600 hover:bg-purple-400 px-4 py-2 rounded-md hover:text-white"
								// onClick={() => handleClick(id)}
								onClick={handleChangeStatus}
							>
								{status}
							</button>
						</>
					)}
				</div>
			</div>
			{/* <hr /> */}
		</>
	);
}
