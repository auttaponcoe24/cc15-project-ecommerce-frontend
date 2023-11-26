import { useEffect } from "react";
import Carousel from "../components/Carousel";
import ProductList from "../features/product/ProductList";
import { useProduct } from "../hooks/use-product";

export default function HomePage() {
	const { getProduct, fetchProduct } = useProduct();

	useEffect(() => {
		fetchProduct();
	}, []);

	return (
		<div className="flex flex-col justify-center items-center">
			<div className="max-w-[1024px] my-2">
				<Carousel />
			</div>
			{/* product */}
			<div className="max-w-4xl mx-auto my-4 flex flex-col items-center">
				<ProductList data={getProduct} />
			</div>
		</div>
	);
}
