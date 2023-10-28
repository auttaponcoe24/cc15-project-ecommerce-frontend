import LogoContent from "../features/auth/LogoContent";
import RegisterForm from "../features/auth/RegisterForm";

export default function RegisterPage() {
	return (
		<>
			<div className=" py-10 gap-6 flex flex-col items-center justify-center  h-screen lg:flex-row ">
				{/* Logo */}
				<LogoContent />
				<div className="mt-10 self-stretch lg:self-center min-[900px]:mt-0 min-[900px]:basis-[24.75rem]">
					<div className=" mx-auto max-w-[24.75rem] bg-white rounded-lg shadow-[0_0_15px_rgb(0_0_0_/0.2)] mb-6 p-4">
						<RegisterForm />
					</div>
				</div>
			</div>
		</>
	);
}
