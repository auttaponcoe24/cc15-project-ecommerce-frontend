import React, { useEffect, useState } from "react";
import OrdersList from "./OrdersList";
import { useProduct } from "../../hooks/use-product";
import Loading from "../../components/Loading";

export default function Orders() {
	const { fetchOrder, getOrder } = useProduct();
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const fetchData = () => {
			try {
				setLoading(true);
				fetchOrder();
			} catch (err) {
				console.log(err);
			} finally {
				setLoading(false);
			}
		};
		fetchData();
	}, []);

	return (
		<div className="flex h-screen ">
			{loading && <Loading />}
			<div className="w-full ">
				<ul className=" grid grid-cols-6 justify-items-center mx-4 my-4 text-2xl font-semibold text-gray-600 bg-white px-2 py-2 rounded-lg">
					{/* <li>ORDERS</li> */}
					<li>DATE</li>
					<li>RECIPIENT</li>
					<li>PRODUCT</li>
					<li>AMOUNT</li>
					<li>PRICE</li>
					<li>STATUS</li>
				</ul>
				<hr className="mx-4" />
				<div>
					<OrdersList data={getOrder} />
				</div>
			</div>
			<div></div>
		</div>
	);
}
