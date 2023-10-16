import React, { useState } from "react";
import { BsTrash } from "react-icons/bs";

export default function CartItem({
	name,
	images,
	price,
	quantiry,
	deleteCart,
	cartObj,
}) {
	const [current, setCurrent] = useState(quantiry);
	const [sumPrice, setSumPrice] = useState(price * quantiry);

	const handleClickIncrease = () => {
		setCurrent(current + 1);
		setSumPrice(price * (current + 1));
	};

	const handleClickDecrease = async () => {
		setCurrent(current - 1);
		setSumPrice(price * (current - 1));
	};

	const handleClickDelete = () => {
		deleteCart(cartObj.id);
	};

	return (
		<>
			<div className="flex items-center justify-between mx-auto w-[600px] border p-4">
				<div className="w-[150px] h-[150px] border mr-6 shadow-lg">
					<img src={images} alt={name} />
				</div>

				<div className="flex flex-col flex-1 gap-4">
					<div className="flex items-center justify-between ">
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
								{sumPrice}
							</div>
							<div className="font-bold">TOTAL</div>
						</div>
					</div>

					<div className="flex self-start items-center justify-start gap-4 border  rounded-lg border-gray-400 ">
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
