import axios from "../config/axios";
import React, { useEffect, useState } from "react";
import Button from "../features/product/Button";
import { Navigate, useParams, Link } from "react-router-dom";
import { useAuth } from "../hooks/use-auth";
import { useProduct } from "../hooks/use-product.js";

export default function ProductPage() {
	const { authUser } = useAuth();
	const { getCartItems, setNumOrder, numOrder } = useProduct();

	const { productId } = useParams();
	const [productUser, setProductUser] = useState("");
	const [amount, setAmount] = useState(1);

	useEffect(() => {
		axios
			.get(`/product/${productId}`)
			.then((res) => {
				// console.log("res,res", res);
				setProductUser(res.data.productId);
			})
			.catch((err) => console.log(err));
	}, []);

	useEffect(() => {
		getCartItems();
	}, []);

	const handleClickAddProductMyCart = async () => {
		let cart = {
			amount: amount,
		};
		if (!authUser) {
			return <Navigate to="/login" />;
		} else {
			try {
				await axios.post(`/cart/mycart/${productId}`, cart);

				setNumOrder(numOrder + 1);
				// getCartItems();
				window.location.reload();
			} catch (err) {
				console.log(err);
			}
		}
	};

	// console.log("prodcutUser", productUser);
	// console.log(cart);

	const handleClickIncrease = () => {
		setAmount(amount + 1);
		getCartItems();
	};
	const handleClickDecrease = () => {
		setAmount(amount - 1);
		getCartItems();
	};

	return (
		<>
			<div className="max-w-4xl mx-auto flex flex-col my-4 mb-10 p-4 h-screen">
				{productUser ? (
					<>
						<div className="my-4">
							home / product / <span>{productUser.name}</span>
						</div>
						<div className="flex flex-col md:flex-row items-center justify-center gap-4">
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
								{/* <div>Rating</div> */}
								<div>Detail</div>
								<hr className="border w-full" />
								<div className="flex gap-4 md:flex-row">
									{/* <div>price :</div> */}
									<span className="text-3xl font-mono text-red-500 font-semibold font-serif">
										{productUser.price} THB
									</span>
								</div>
								<div className="flex gap-2 items-center justify-center">
									<span>amount : </span>
									<div className="flex self-center md:self-start items-center justify-start gap-4 border  rounded-lg border-gray-400">
										<button
											className="border border-collapse rounded-lg text-xl px-4 bg-red-700 text-white hover:text-red-500 outline-none"
											onClick={handleClickDecrease}
											disabled={amount === 1}
										>
											-
										</button>
										<div>{amount}</div>

										<button
											className="border border-collapse rounded-lg text-xl px-4 bg-blue-700 text-white hover:text-red-500 outline-none"
											onClick={handleClickIncrease}
										>
											+
										</button>
									</div>
								</div>
								{authUser ? (
									<Link to="/cart">
										<Button
											onClick={
												handleClickAddProductMyCart
											}
										>
											ADD TO CART
										</Button>
									</Link>
								) : (
									<Link to="/login">
										<Button>ADD TO CART</Button>
									</Link>
								)}
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
