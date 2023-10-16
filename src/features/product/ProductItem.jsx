import React, { useState } from "react";
import Button from "./Button";
import Model from "../../components/Model";
import CartInModel from "../cart/CartInModel";
import axios from "../../config/axios";
import { Link, useParams } from "react-router-dom";
import { useProduct } from "../../hooks/use-product";

export default function ProductItem({ id, name, price, image }) {
	const [isOpen, setIsOpen] = useState(false);

	const { cart, setCart, setCartUser, setSumAllPrice } = useProduct();

	const handleClickAddProductMyCart = async (cart) => {
		try {
			setCart({ ...cart, quantiry: 1 });
			const res = await axios.post(`/cart/${id}`, cart);
			console.log(res.data);
			setCartUser((p) => {
				if (p.length > 0) return [...p, res.data.addCart];
				return [res.data.addCart];
			});
			// setSumAllPrice();
			setIsOpen(true);
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div className="flex flex-col items-center gap-1 border shadow-md pb-4 rounded-lg">
			<Link to={`/product/${id}`}>
				<img src={image} alt={name} />
			</Link>
			<hr className="border w-[90%]" />
			<div className="font-semibold text-xl">{name}</div>
			<h1 className="text-red-400 font-mono font-semibold text-2xl">
				{price}
			</h1>
			<Button onClick={() => handleClickAddProductMyCart(cart)}>
				ADD TO CART
			</Button>

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
