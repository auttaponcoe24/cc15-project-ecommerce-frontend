import React, { useState } from "react";
import OrdersItem from "./OrdersItem";

export default function OrdersList({ data }) {
	// console.log(data);

	return (
		<>
			<div className="flex flex-col gap-4 px-4  py-4">
				{data.map((item, index) => (
					<div key={index}>
						<OrdersItem
							objOrder={item}
							id={item.id}
							date={item.createdAt.slice(0, 10)}
							arrProduct={item.orderItems}
							arrPrice={item.orderItems}
							arrAmount={item.orderItems}
							status={item.status}
						/>
					</div>
				))}
			</div>
		</>
	);
}
