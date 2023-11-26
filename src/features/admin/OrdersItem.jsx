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
			fetchOrder();
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
			<div className="grid grid-cols-12  justify-items-center text-lg py-2 px-2 mb-1 rounded-lg shadow-md bg-white">
				<div className="col-span-2">{date}</div>
				<div className="col-span-2">
					<div>{name}</div>
					<div>{address}</div>
				</div>
				<div className="col-span-2">
					{arrProduct?.map((item, index) => (
						<div key={index}>{item?.product?.name}</div>
					))}
				</div>
				<div className="col-span-2">
					{arrAmount?.map((item, index) => (
						<div key={index}>{item?.amount}</div>
					))}
				</div>
				<div className="col-span-2">
					{arrPrice?.map((item, index) => (
						<div key={index}>{item?.price}</div>
					))}
				</div>
				<div className="col-span-2">
					{status === "SUCCESS" ? (
						<>
							<div className="bg-green-400 text-white py-1 px-2 rounded-lg">
								{status}
							</div>
						</>
					) : (
						<>
							<button
								className="bg-red-400 text-white hover:bg-red-600 px-2 py-1 rounded-md hover:text-black"
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
