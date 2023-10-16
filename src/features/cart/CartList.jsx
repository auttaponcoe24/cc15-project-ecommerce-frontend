import CartItem from "./CartItem";

export default function CartList({ cartUser, deleteCart }) {
	console.log(cartUser);

	return (
		<div className="flex flex-col gap-4 items-center justify-center">
			{cartUser.map((item, index) => (
				<div key={index}>
					<CartItem
						cartObj={item}
						// productId={item.product?.id ?? 1}
						name={item.product?.name ?? "test"}
						images={item.product?.images ?? ""}
						price={item.product?.price ?? 1000}
						quantiry={item.quantiry ?? 1}
						deleteCart={deleteCart}
					/>
				</div>
			))}
		</div>
	);
}
