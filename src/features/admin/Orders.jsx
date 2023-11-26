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
				fetchOrder();
				setLoading(true);
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
			<div className="w-full m-4">
				<ul className="max-w-[1024px] grid grid-cols-12  justify-items-center text-lg bg-blue-gray-600 text-white font-semibold px-2 py-2 rounded-lg">
					<li className="col-span-2">DATE</li>
					<li className="col-span-2">RECIPIENT</li>
					<li className="col-span-2">PRODUCT</li>
					<li className="col-span-2">AMOUNT</li>
					<li className="col-span-2 mr-4">PRICE</li>
					<li className="col-span-2 mr-6">STATUS</li>
				</ul>
				<div className="max-w-[1024px] ">
					<OrdersList data={getOrder} />
				</div>
			</div>
			<div></div>
		</div>
	);
}
