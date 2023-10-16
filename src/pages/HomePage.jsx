import CarouselImage from "../components/CarouselImage";
import ProductList from "../features/product/ProductList";
import { useProduct } from "../hooks/use-product";

export default function HomePage() {
	const { getProduct } = useProduct();

	return (
		<div className="flex flex-col justify-center items-center">
			<div>
				<CarouselImage />
			</div>
			{/* product */}
			<div className="max-w-4xl mx-auto my-4 flex flex-col items-center">
				<ProductList data={getProduct} />
			</div>
		</div>
	);
}
