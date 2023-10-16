import CartList from "../features/cart/CartList";
import Button from "../features/cart/Button";
import { BsTrash } from "react-icons/bs";
import { useProduct } from "../hooks/use-product";

export default function CartPage() {
	const { cartUser, deleteCart, deleteCartAll, sumAllPrice } = useProduct();
	return (
		<>
			<div className="max-w-4xl mx-auto my-4 flex flex-col justify-center">
				<h1 className="text-5xl font-bold my-2 text-center">CART</h1>
				<hr className="my-2 border w-full" />
				<p className="font-semibold ml-4">PRODUCTS</p>
				<hr className="my-2 border w-full" />
				<div className="flex justify-evenly gap-4">
					<CartList cartUser={cartUser} deleteCart={deleteCart} />
					{/* All Sum product in cart */}
					<div className="flex flex-col flex-1 items-center self-start border p-4">
						<div className="font-semibold text-xl">
							All SUM PRODUCT
						</div>
						<div className="flex gap-2">
							<span className="text-red-500">
								{sumAllPrice}...
							</span>
							<span className="font-bold">THB</span>
						</div>
					</div>
				</div>
				<hr className="my-2 border w-full" />
				<div
					onClick={deleteCartAll}
					className="flex items-center justify-center gap-2 hover:cursor-pointer hover:text-red-500 mb-4"
				>
					<BsTrash size={20} /> <span>Cancel All Products</span>
				</div>
				<div className="mx-auto">
					<Button style="bg-blue-500 text-white px-6 py-2">
						Checkout
					</Button>
				</div>
			</div>
		</>
	);
}
