import Lottie from "lottie-react";
import RegisterForm from "../features/auth/RegisterForm";
import registerLottie from "../assets/image/registerLottie.json";

export default function RegisterPage() {
	return (
		<>
			<div className="py-10 m-4 gap-6 flex flex-col items-center justify-center h-screen lg:flex-row ">
				{/* Logo */}
				<div className="max-w-[680px] hidden lg:block">
					<Lottie animationData={registerLottie} />
				</div>
				<div className="mt-10 self-stretch lg:self-center min-[900px]:mt-0 min-[900px]:basis-[24.75rem]">
					<div className="mx-auto max-w-[24.75rem] w-[400px] bg-white rounded-lg shadow-[0_0_15px_rgb(0_0_0_/0.2)] mb-6 py-4 px-10">
						<RegisterForm />
					</div>
				</div>
			</div>
		</>
	);
}
