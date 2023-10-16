import { createContext, useState, useEffect } from "react";
import axios from "../config/axios";
import { useParams } from "react-router-dom";
import { getAccessToken } from "../utils/local-storage";

export const ProductContext = createContext();

function ProductContextProvider({ children }) {
	// const { getAccessToken } = useAuth();
	const [cart, setCart] = useState({
		quantiry: 1,
	});

	// render data=productAll
	const [getProduct, setGetProduct] = useState([]);

	// render data=product in cart
	const [cartUser, setCartUser] = useState([]);

	const [sumAllPrice, setSumAllPrice] = useState([]);

	useEffect(() => {
		const fatchProduct = async () => {
			try {
				const { data } = await axios.get("/product/all");
				// console.log(data.productAll);
				setGetProduct(data.productAll);
			} catch (err) {
				console.log(err);
			}
		};
		fatchProduct();
	}, []);

	useEffect(() => {
		if (getAccessToken()) {
			axios
				.get("/cart")
				.then((res) => {
					setCartUser(res.data.cart);

					setSumAllPrice(
						res.data.cart.reduce((acc, item) => {
							acc +=
								Number(item.quantiry) *
								Number(item.product.price);
							return acc;
						}, 0)
					);
				})
				.catch((err) => console.log(err));
		}
	}, []);

	const deleteCart = async (cartId) => {
		try {
			await axios.delete(`/cart/${cartId}`);
			setCartUser(cartUser.filter((el) => el.id !== cartId));
			setSumAllPrice();
		} catch (err) {
			console.log(err);
		}
	};

	const deleteCartAll = async () => {
		try {
			await axios.delete("/cart/deleteCartAll");
			setCartUser([]);
			setSumAllPrice(0);
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<ProductContext.Provider
			value={{
				getProduct,
				cart,
				setCart,
				cartUser,
				setCartUser,
				deleteCart,
				deleteCartAll,
				sumAllPrice,
				setSumAllPrice,
			}}
		>
			{children}
		</ProductContext.Provider>
	);
}

export default ProductContextProvider;
