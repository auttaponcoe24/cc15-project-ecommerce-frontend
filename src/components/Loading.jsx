// import { LoaderIcon } from "../hooks/use-loaderIcon";
import Lottie from "lottie-react";
import LoaderTools from "../assets/image/LoaderIcon.json";

export default function Loading() {
	return (
		<>
			<div className="fixed inset-0 bg-black opacity-30 z-40"></div>
			<div className="fixed inset-0 z-50">
				<div className="flex items-center justify-center min-h-full">
					{/* <LoaderIcon className="fill-blue-600 animate-spin" /> */}
					<Lottie animationData={LoaderTools} />
				</div>
			</div>
		</>
	);
}
