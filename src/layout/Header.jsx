import { Link } from "react-router-dom";
import Menu from "./Menu";
import { useAuth } from "../hooks/use-auth";
import Dropdown from "./Dropdown";
import { BsCart } from "react-icons/bs";
import { useProduct } from "../hooks/use-product";
import Sidenav from "../components/Sidenav";
import logo from "../assets/image/logo.jpeg";

export default function Header() {
	const { authUser } = useAuth();
	const { numOrder } = useProduct();
	return (
		<header className="grid grid-cols-2 md:grid-cols-4 px-6 py-2 bg-gray-500 shadow-lg sticky top-0 z-30">
			{/* Logo */}
			<div className="justify-self-start self-center text-white">
				<Link to="/" className="hidden md:block">
					<div className="w-12 h-12 rounded-full overflow-hidden ">
						<img src={logo} alt="logo" className="w-full h-full" />
					</div>
				</Link>

				<Sidenav />
			</div>

			{/* NavMenu */}
			<div className="hidden md:block self-center col-span-2 ">
				<Menu />
			</div>

			{/* Login */}
			<div className="relative flex gap-6 justify-center items-center justify-self-end self-center text-white">
				{numOrder > 0 && (
					<div className="absolute flex justify-center items-center top-[-2px] left-3 text-sm bg-red-600 w-4 h-4 rounded-full">
						{numOrder}
					</div>
				)}
				<Link to="/cart">
					<BsCart className="cursor-pointer hover:text-orange-500" />
				</Link>
				{authUser ? (
					<Dropdown />
				) : (
					<Link to="/login">
						<h1>
							Login <span className="text-black">/</span> Register
						</h1>
					</Link>
				)}
			</div>
		</header>
	);
}
