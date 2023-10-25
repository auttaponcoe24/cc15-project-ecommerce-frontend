import React from "react";

export default function MyOrderItem({ date, product, amount, price, status }) {
	return (
		<div className="flex gap-4 border shadow-md mb-2 py-2 px-4 rounded-md">
			<div className="flex flex-col gap-4 ">
				<div>DATE</div>
				<div>{date.slice(0, 10)}</div>
			</div>
			<div className="flex flex-col gap-4 ">
				<div>PRODUCT</div>
				<div>
					{product.map((item, index) => (
						<div key={index}>{item.product.name}</div>
					))}
				</div>
			</div>
			<div className="flex flex-col gap-4 ">
				<div>AMOUNT</div>
				{amount.map((item, index) => (
					<div key={index}>{item.amount}</div>
				))}
			</div>
			<div className="flex flex-col gap-4 ">
				<div>PRICE</div>
				{price.map((item, index) => (
					<div key={index}>{item.price}</div>
				))}
			</div>
			<div className="flex flex-col gap-4 ">
				<div>STATUS</div>
				<div
					className={` ${
						status === "SUCCESS" ? "text-green-600" : "text-red-600"
					}`}
				>
					{status}
				</div>
			</div>
			<hr />
		</div>
	);
}
