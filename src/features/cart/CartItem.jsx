import React, { useState, useEffect } from "react";
import { BsTrash } from "react-icons/bs";
import { useProduct } from "../../hooks/use-product";

export default function CartItem({
	name,
	cartId,
	images,
	price,
	deleteCart,
	cartObj,
	amount,
}) {
	const { changeAmount, getCartItems } = useProduct();
	// console.log("first", amount);

	const [current, setCurrent] = useState(amount);
	const [sumProduct, setSumProduct] = useState(price * amount);

	const handleClickIncrease = async () => {
		try {
			setCurrent(current + 1);
			setSumProduct(price * (current + 1));
			await changeAmount(cartId, { amount: current + 1 });
			getCartItems();
		} catch (err) {
			console.log(err);
		}
	};

	const handleClickDecrease = async () => {
		setCurrent(current - 1);
		setSumProduct(price * (current - 1));
		await changeAmount(cartId, { amount: current - 1 });
		getCartItems();
	};

	const handleClickDelete = () => {
		deleteCart(cartObj.id);
	};

	return (
		<>
			<div className="flex flex-col md:flex-row  gap-4 items-center justify-between border p-4">
				<div className="w-[150px] h-[150px] border mr-6 shadow-lg">
					<img src={images} alt={name} />
				</div>

				<div className="w-full p-4 flex flex-col flex-1 gap-4">
					<div className=" flex items-center justify-between ">
						<span className="text-xl font-semibold">{name}</span>
						<BsTrash
							onClick={handleClickDelete}
							className="cursor-pointer"
						/>
					</div>

					<div className="flex items-center justify-between ">
						<div className="flex gap-2">
							<div>{price}</div>
							<span className="font-bold">THB</span>
						</div>
						<div className="flex gap-2 items-center">
							<div className="text-red-500 font-semibold text-xl">
								{sumProduct}
							</div>
							<div className="font-bold">TOTAL</div>
						</div>
					</div>

					<div className="flex self-center md:self-start items-center justify-start gap-4 border  rounded-lg border-gray-400 ">
						<button
							onClick={handleClickDecrease}
							className=" border border-collapse rounded-lg text-xl px-4 bg-red-700 text-white hover:text-red-500 outline-none"
							disabled={current === 1}
						>
							-
						</button>
						<div>{current}</div>

						<button
							onClick={() => handleClickIncrease()}
							className="border border-collapse rounded-lg text-xl px-4 bg-blue-700 text-white hover:text-red-500 outline-none"
						>
							+
						</button>
					</div>
				</div>
			</div>
		</>
	);
}
