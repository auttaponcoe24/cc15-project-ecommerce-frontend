import React, { useState } from "react";
import Button from "./Button";
import Model from "../../components/Model";
import CartInModel from "../cart/CartInModel";
import axios from "../../config/axios";
import { Link } from "react-router-dom";
import { useProduct } from "../../hooks/use-product";
import { useAuth } from "../../hooks/use-auth";

export default function ProductItem({ id, name, price, image }) {
	const [isOpen, setIsOpen] = useState(false);

	const { cart, setCart, setCartUser, setNumOrder, numOrder, getCartItems } =
		useProduct();
	const { authUser } = useAuth();

	const handleClickAddProductMyCart = async (cart) => {
		try {
			setCart({ ...cart, amount: 1 });
			const res = await axios.post(`/cart/mycart/${id}`, cart);
			console.log(res.data);
			setCartUser((p) => {
				if (p.length > 0) return [...p, res.data.addCart];
				return [res.data.addCart];
			});
			setNumOrder(numOrder + 1);
			getCartItems();

			setIsOpen(true);
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div className="flex flex-col w-[300px] items-center gap-1 border shadow-md pb-4 rounded-lg ">
			<Link to={`/product/${id}`}>
				<div className="w-[200px] h-[200px]  mx-4 my-2">
					<img src={image} alt={name} className="w-full h-full" />
				</div>
			</Link>
			<hr className="border w-[90%]" />
			<div className="font-semibold text-xl">{name}</div>
			<h1 className="text-red-400 font-mono font-semibold text-2xl">
				{price}
			</h1>
			{authUser ? (
				<Button onClick={() => handleClickAddProductMyCart(cart)}>
					ADD TO CART
				</Button>
			) : (
				<Link to="/login">
					<Button>ADD TO CART</Button>
				</Link>
			)}

			<Model
				className=""
				title="CART"
				open={isOpen}
				onClose={() => setIsOpen(false)}
			>
				<CartInModel
					name={name}
					price={price}
					image={image}
					onClose={() => setIsOpen(false)}
				/>
			</Model>
		</div>
	);
}
