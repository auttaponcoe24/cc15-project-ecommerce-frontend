import { Carousel } from "@material-tailwind/react";
import pic1 from "../assets/image/curo1.png";
import pic2 from "../assets/image/curo2.png";
import pic3 from "../assets/image/curo3.png";

export default function CarouselCustomNavigation() {
	return (
		<Carousel
			className="rounded-xl"
			transition={{ duration: 2 }}
			autoplay={true}
			loop={true}
			navigation={({ setActiveIndex, activeIndex, length }) => (
				<div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
					{new Array(length).fill("").map((_, i) => (
						<span
							key={i}
							className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
								activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
							}`}
							onClick={() => setActiveIndex(i)}
						/>
					))}
				</div>
			)}
		>
			<img src={pic1} alt="image 1" className="h-full w-full object-cover" />
			<img src={pic2} alt="image 2" className="h-full w-full object-cover" />
			<img src={pic3} alt="image 3" className="h-full w-full object-cover" />
		</Carousel>
	);
}
