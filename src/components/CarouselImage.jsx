import { useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import pic1 from "../assets/image/pic1.png";
import pic2 from "../assets/image/pic2.png";
import pic3 from "../assets/image/pic3.png";

export default function CarouselImage() {
	const slides = [
		{
			id: 1,
			image: pic1,
			title: "pic1",
		},
		{
			id: 2,
			image: pic2,
			title: "pic2",
		},
		{
			id: 3,
			image: pic3,
			title: "pic3",
		},
	];

	const [current, setCurrent] = useState(0);
	const length = slides.length;
	// console.log(length);

	const prevSlide = () => {
		if (current === 0) {
			setCurrent(length - 1);
		} else {
			setCurrent(current - 1);
		}
	};

	const nextSlide = () => {
		if (current === length - 1) {
			setCurrent(0);
		} else {
			setCurrent(current + 1);
		}
	};

	return (
		<div className="relative flex justify-center items-center w-full">
			{slides.map((img, index) => (
				<div
					className={`${
						index === current
							? "opacity-1 scale-90 duration-300 ease-in-out"
							: "opacity-0 duration-300"
					}`}
					key={index}
				>
					{index === current && (
						<img
							className="h-[400px] border shadow-lg rounded-xl object-cover"
							src={img.image}
							alt={img.title}
						/>
					)}
				</div>
			))}

			<BsChevronCompactLeft
				size={30}
				className="absolute left-0 cursor-pointer"
				onClick={prevSlide}
			/>
			<BsChevronCompactRight
				size={30}
				className="absolute right-0 cursor-pointer"
				onClick={nextSlide}
			/>
		</div>
	);
}
