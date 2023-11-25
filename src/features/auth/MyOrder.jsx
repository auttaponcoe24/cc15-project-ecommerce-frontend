import React, { useEffect } from "react";
import { useProduct } from "../../hooks/use-product";
import MyOrderItem from "./MyOrderItem";

export default function MyOrder() {
	const { fetchMyOrder, myOrder } = useProduct();

	useEffect(() => {
		fetchMyOrder();
	}, []);

	return (
		<div className="flex flex-col gap-4 items-center justify-start min-h-[680px]">
			<h1 className="text-2xl font-semibold">...My Orders...</h1>
			{myOrder.map((item, index) => (
				<div key={index}>
					<MyOrderItem
						// order={}
						date={item.createdAt}
						product={item.orderItems}
						amount={item.orderItems}
						price={item.orderItems}
						status={item.status}
					/>
					<hr />
				</div>
			))}
		</div>
	);
}
