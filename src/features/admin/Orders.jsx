import React from "react";
import OrdersList from "./OrdersList";
import { useProduct } from "../../hooks/use-product";

const test = [
	{
		id: 1,
		date: "11-11-11",
		name: "product1",
		price: 1111,
		amount: 1,
		stats: "PADDING",
	},
	{
		id: 2,
		date: "11-11-11",
		name: "product2",
		price: 1111,
		amount: 1,
		stats: "PADDING",
	},
	{
		id: 3,
		date: "11-11-11",
		name: "product3",
		price: 1111,
		amount: 1,
		stats: "PADDING",
	},
];

export default function Orders() {
	const { fatchOrder } = useProduct();
	return (
		<div className="flex h-screen bg-slate-400">
			<div className="w-full ">
				<ul className=" grid grid-cols-6 justify-items-center mx-4 my-4 text-2xl font-semibold text-white">
					<li>ORDERS</li>
					<li>DATE</li>
					<li>PRODUCT</li>
					<li>AMOUNT</li>
					<li>PRICE</li>
					<li>STATUS</li>
				</ul>
				<hr className="mx-4" />
				<div>
					<OrdersList data={fatchOrder} />
				</div>
			</div>
			<div></div>
		</div>
	);
}
