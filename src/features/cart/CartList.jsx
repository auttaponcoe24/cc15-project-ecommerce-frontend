import CartItem from "./CartItem";

export default function CartList({ cartUser, deleteCart }) {
	// console.log("heool", cartUser);

	return (
		<div className="flex flex-col gap-4 items-center justify-start ">
			{cartUser.map((item, index) => (
				<div key={index}>
					<CartItem
						cartObj={item}
						cartId={item.id}
						name={item.product?.name ?? "test"}
						images={item.product?.images ?? ""}
						price={item.product?.price ?? 1000}
						amount={item.amount}
						deleteCart={deleteCart}
					/>
				</div>
			))}
		</div>
	);
}
