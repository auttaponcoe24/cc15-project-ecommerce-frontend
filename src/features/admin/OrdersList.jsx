import React, { useState } from "react";
import OrdersItem from "./OrdersItem";

export default function OrdersList({ data }) {
	console.log(data);

	return (
		<>
			<div className="flex flex-col px-4  py-4">
				{data.map((item, index) => (
					<div key={index}>
						<OrdersItem
							objOrder={item}
							id={item.id}
							date={item.createdAt.slice(0, 10)}
							arrProduct={item.orderItems}
							arrPrice={item.orderItems}
							arrAmount={item.orderItems}
							name={item.user.firstName}
							address={item.user.address}
							status={item.status}
						/>
					</div>
				))}
			</div>
		</>
	);
}
