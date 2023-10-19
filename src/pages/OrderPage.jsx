import React from "react";
import OrderForm from "../features/cart/OrderForm";
import axios from "../config/axios";
import payment from "../assets/image/payment1.png";
import { useProduct } from "../hooks/use-product";

export default function OrderPage() {
	const { sumTotalProduct, createOrderItem, deleteCartAll, numOrderId } =
		useProduct();

	const changeStatusUploadSlip = async (data) => {
		const res = await axios.patch("/order/confirmorder/padding", data);
		console.log(res);
	};

	return (
		<>
			<h5 className="text-center my-4 text-xl font-bold">Payment</h5>
			<div className="flex items-center justify-center gap-x-16 mx-auto max-w-4xl border p-4 m-4">
				<div className="flex flex-col gap-4 items-center">
					<div className="text-xl font-semibold text-red-500 ">
						{sumTotalProduct}
					</div>
					<div className="shadow-md overflow-hidden justify-center items-center object-cover  w-[200px] h-[200px] mb-2">
						<img src={payment} className="" alt="payment" />
					</div>
				</div>
				<div>
					<OrderForm
						changeStatusUploadSlip={changeStatusUploadSlip}
						createOrderItem={createOrderItem}
						deleteCartAll={deleteCartAll}
						numOrderId={numOrderId}
					/>
				</div>
			</div>
		</>
	);
}
