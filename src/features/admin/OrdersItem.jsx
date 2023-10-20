import React from "react";
import UserInfo from "./UserInfo";
import { useProduct } from "../../hooks/use-product";

export default function OrdersItem({
	id,
	date,
	arrProduct,
	arrAmount,
	arrPrice,
	status,
}) {
	const { panddingChangeSuccess } = useProduct();
	const handleClick = (id) => {
		panddingChangeSuccess(id);
	};
	return (
		<>
			<div className="grid grid-cols-6 justify-items-center text-xl py-2 mb-2 ">
				<div>{id}</div>
				<div className="">{date}</div>
				<div>
					{arrProduct.map((item, index) => (
						<div key={index}>{item.product.name}</div>
					))}
				</div>
				<div>
					{arrAmount.map((item, index) => (
						<div key={index}>{item.amount}</div>
					))}
				</div>
				<div>
					{arrPrice.map((item, index) => (
						<div key={index}>{item.price}</div>
					))}
				</div>
				<div>
					<button onClick={() => handleClick(id)}>{status}</button>
				</div>
			</div>
			<hr />
		</>
	);
}
