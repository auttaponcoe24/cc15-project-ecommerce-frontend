import LogoContent from "../features/auth/LogoContent";
import RegisterForm from "../features/auth/RegisterForm";

export default function RegisterPage() {
	return (
		<>
			<div className="mx-10 pt-10 flex flex-col items-center min-[900px]:pt-[2.25rem] min-[900px]:flex-row min-[900px]:justify-between min-[900px]:items-start">
				{/* Logo */}
				<LogoContent />
				<div className="mt-10 self-stretch min-[900px]:mt-0 min-[900px]:basis-[24.75rem]">
					<div className="mx-auto max-w-[24.75rem] bg-white rounded-lg shadow-[0_0_15px_rgb(0_0_0_/0.2)] mb-6 p-4">
						<RegisterForm />
					</div>
				</div>
			</div>
		</>
	);
}
