import axios from "../config/axios";
import React, { useEffect, useState } from "react";
import Button from "../features/product/Button";
import { Navigate, useParams } from "react-router-dom";
import { useAuth } from "../hooks/use-auth";
import { useProduct } from "../hooks/use-product.js";

export default function ProductPage() {
	const { authUser } = useAuth();
	const { cart, setCart } = useProduct();

	const { productId } = useParams();
	const [productUser, setProductUser] = useState({});

	useEffect(() => {
		axios
			.get(`/product/${productId}`)
			.then((res) => {
				console.log(res);
				setProductUser(res.data.product);
			})
			.catch((err) => console.log(err));
	}, [productId]);

	const handleClickAddProductMyCart = async (cart) => {
		if (!authUser) {
			console.log("ff");
			return <Navigate to="/login" />;
		} else {
			await axios
				.post(`/cart/${productId}`, cart)
				.then((res) => {
					// setCart(res.data.addCart?.quantiry);
					console.log(res.data);
				})
				.catch((err) => console.log(err));
		}
	};

	return (
		<>
			<div className="max-w-4xl mx-auto flex flex-col my-4 p-4">
				{productUser ? (
					<>
						<div className="my-4">
							home / product / <span>{productUser.name}</span>
						</div>
						<div className="flex items-center justify-center gap-4">
							<div className="w-[300px] h-[300px] border shadow-lg mr-4">
								<img
									src={productUser.images}
									alt={productUser.name}
									className="w-full h-full object-cover"
								/>
							</div>

							<div className="flex flex-col flex-1 gap-4 items-start">
								<div className="text-6xl">
									{productUser.name}
								</div>
								<div>rating</div>
								<div>Detail</div>
								<hr className="border w-full" />
								<div>
									<div>price :</div>
									<span className="text-4xl font-mono text-red-500 font-semibold">
										{productUser.price}
									</span>
								</div>
								<div>
									<span>amount : </span>
									<input
										type="text"
										onChange={(e) =>
											setCart({
												...cart,
												quantiry: +e.target.value,
											})
										}
										className="border px-2 py-2 text-xl font-semibold focus:outline-none rounded-lg"
										value={cart.quantiry}
										placeholder="AMOUNT PRODUCT..."
									/>
								</div>
								<Button
									onClick={() =>
										handleClickAddProductMyCart(cart)
									}
								>
									ADD TO CART
								</Button>
							</div>
						</div>
					</>
				) : (
					<div className="text-center p-8 text-3xl font-bold">
						404!!! product not found
					</div>
				)}
			</div>
		</>
	);
}
