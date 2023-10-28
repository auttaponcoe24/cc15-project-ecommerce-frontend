import CartList from "../features/cart/CartList";
import Button from "../features/cart/Button";
import { BsTrash } from "react-icons/bs";
import { useProduct } from "../hooks/use-product";
import { Link } from "react-router-dom";
import axios from "../config/axios";
import { useState } from "react";

export default function CartPage() {
	const {
		cartUser,
		deleteCart,
		deleteCartAll,
		sumTotalProduct,
		statusOrder,
		setNumOrderId,
	} = useProduct();

	const urlPathConfirmorder = "/cart/confirmorder";

	const handleClikeCheckout = async () => {
		try {
			const { data } = await axios.post(
				"order/confirmorder/incart",
				statusOrder
			);
			setNumOrderId(data.createOrder.id);
			// console.log("orderId", data);
		} catch (err) {
			console.log(err);
		}
	};

	// console.log("cartUser", cartUser.length);
	return (
		<>
			<div className="mx-auto my-4 flex flex-col justify-center">
				<h1 className="text-5xl font-bold my-2 text-center">CART</h1>
				<hr className="my-2 border w-full" />
				<p className="font-semibold ml-4">PRODUCTS</p>
				<hr className="my-2 border w-full" />
				<div className="flex flex-col md:flex-row justify-between gap-4">
					{cartUser.length === 0 ? (
						<div className="hidden"></div>
					) : (
						<CartList cartUser={cartUser} deleteCart={deleteCart} />
					)}

					{/* All Sum product in cart */}
					<div className="flex flex-col mx-auto  items-center justify-center self-center md:self-start md:w-[320px] md:mt-4 border px-2 py-4 ">
						<div className="font-semibold text-xl ">
							All SUM PRODUCT
						</div>
						<div className="flex  gap-2">
							<span className="text-red-500">
								...{sumTotalProduct}...
							</span>
							<span className="font-bold">THB</span>
						</div>
					</div>
				</div>
				<hr className="my-2 border w-full" />
				{cartUser.length === 0 ? (
					<></>
				) : (
					<>
						<div
							onClick={deleteCartAll}
							className="flex items-center self-center justify-center gap-2 hover:cursor-pointer hover:text-red-500 mb-4"
						>
							<BsTrash size={20} />
							<span>Cancel All Products</span>
						</div>
						<div className="mx-auto">
							<Link to={urlPathConfirmorder}>
								<Button
									style="bg-blue-500 text-white px-6 py-2"
									onClick={handleClikeCheckout}
								>
									Checkout
								</Button>
							</Link>
						</div>
					</>
				)}
			</div>
		</>
	);
}
