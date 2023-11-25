import { Link } from "react-router-dom";
import LogoContent from "../features/auth/LogoContent";
import LoginForm from "../features/auth/LoginForm";

export default function LoginPage() {
	return (
		<>
			<div className="h-screen py-10 gap-6 flex flex-col lg:flex-row items-center justify-center ">
				{/* Logo */}
				<LogoContent />
				<div className="mt-10 self-stretch lg:self-center min-[900px]:mt-0 min-[900px]:basis-[24.75rem]">
					{/* <div className="mx-auto max-w-[24.75rem] bg-white rounded-lg shadow-[0_0_15px_rgb(0_0_0_/0.2)] mb-6 p-4"> */}
					<div className="mx-auto max-w-[24.75rem] bg-white rounded-lg shadow-[0_0_15px_rgb(0_0_0_/0.2)] mb-6 py-4 px-10">
						<LoginForm />
						<hr className="border-gray-400 my-4" />

						<div className="flex items-center justify-end underline">
							<Link
								className="cursor-pointer hover:text-orange-400 hover:font-semiboldld"
								to="/register"
							>
								create account
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
