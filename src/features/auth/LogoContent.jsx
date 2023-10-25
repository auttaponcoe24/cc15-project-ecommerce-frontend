import React from "react";
import logoimage from "../../assets/image/logo.png";
export default function LogoContent() {
	return (
		<div className="w-[500px] h-[350px]">
			<img
				src={logoimage}
				alt=""
				className="w-full h-full rounded-xl object-contain shadow-xl"
			/>
		</div>
	);
}
