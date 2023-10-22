import { createContext, useState, useEffect } from "react";
import axios from "../config/axios";
import { useParams } from "react-router-dom";
import { getAccessToken } from "../utils/local-storage";

export const ProductContext = createContext();

function ProductContextProvider({ children }) {
	const [loading, setLoading] = useState(true);
	// const { getAccessToken } = useAuth();
	const [cart, setCart] = useState({ amount: 1 });

	// render data=productAll
	const [getProduct, setGetProduct] = useState([]);

	// render data=product in cart
	const [cartUser, setCartUser] = useState([]);

	const [sumTotalProduct, setSumTotalProduct] = useState(0);

	const [statusOrder, setStatusOrder] = useState({
		status: "INCART",
	});

	const [numOrderId, setNumOrderId] = useState(0);

	const [fatchOrder, setFatchOrder] = useState([]);

	const [fatchCategory, setFatchCategory] = useState([]);

	const [numOrder, setNumOrder] = useState(0);

	const getCartItems = () => {
		axios
			.get("/cart")
			.then((res) => {
				setCartUser(res.data.cart);
				setSumTotalProduct(res.data.sumTotalProduct);
				setNumOrder(res.data.cart.length);
			})
			.catch((err) => console.log(err));
	};

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
			getCartItems();
		}
	}, []);

	const deleteCart = async (cartId) => {
		try {
			const res = await axios.delete(`/cart/${cartId}`);
			console.log(res);
			setCartUser(cartUser.filter((el) => el.id !== cartId));
			// setSumTotalProduct(...sumTotalProduct);
			setNumOrder(numOrder - 1);
		} catch (err) {
			console.log(err);
		}
	};

	const deleteCartAll = async () => {
		try {
			await axios.delete("/cart/deleteCartAll");
			setCartUser([]);
			setSumTotalProduct(0);
			setNumOrder(0);
		} catch (err) {
			console.log(err);
		}
	};

	const createOrderItem = async (orderId) => {
		try {
			await axios.post(`/order/confirmorder/check/${orderId}`);
		} catch (err) {
			console.log(err);
		}
	};

	const changeAmount = async (cartId, update) => {
		await axios.patch(`cart/mycart/${cartId}/amount`, update);
	};

	// admin

	useEffect(() => {
		const fatchOrder = async () => {
			try {
				const res = await axios.get(`/order/orderitem`);
				console.log(res);
				setFatchOrder(res.data.order);
			} catch (err) {
				console.log(err);
			}
		};
		fatchOrder();
	}, []);

	useEffect(() => {
		const fatchCategory = async () => {
			try {
				const res = await axios.get(`/product/getcategory`);
				// console.log(res);
				setFatchCategory(res.data.fatchCategory);
			} catch (err) {
				console.log(err);
			}
		};
		fatchCategory();
	}, []);

	const panddingChangeSuccess = async (orderId) => {
		try {
			await axios.patch(`/order/confirmorder/success/${orderId}`);
		} catch (err) {
			console.log(err);
		}
	};

	const createProduct = async (formData) => {
		try {
			await axios.post(`/product/categoryId`, formData);
		} catch (err) {
			console.log(err);
		}
	};

	const deleteProduct = async (productId) => {
		try {
			await axios.delete(`/product/${productId}/delete`);
			setGetProduct(getProduct.filter((item) => item.id !== productId));
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
				sumTotalProduct,
				statusOrder,
				setStatusOrder,
				getCartItems,
				createOrderItem,
				numOrderId,
				setNumOrderId,
				fatchOrder,
				panddingChangeSuccess,
				fatchCategory,
				createProduct,
				numOrder,
				setNumOrder,
				deleteProduct,
				changeAmount,
			}}
		>
			{children}
		</ProductContext.Provider>
	);
}

export default ProductContextProvider;
