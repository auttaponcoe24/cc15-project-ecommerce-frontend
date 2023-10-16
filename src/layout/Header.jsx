import { Link } from "react-router-dom";
import Menu from "./Menu";
import { useAuth } from "../hooks/use-auth";
import Dropdown from "./Dropdown";
import { BsCart } from "react-icons/bs";

export default function Header() {
	const { authUser } = useAuth();
	return (
		<header className="grid grid-cols-4 px-4 bg-gray-500 shadow-lg sticky top-0 z-30">
			{/* Logo */}
			<div className="py-2 justify-self-start self-center text-white">
				<Link to="/">
					<h1>Logo</h1>
				</Link>
			</div>

			{/* NavMenu */}
			<div className="self-center col-span-2 ">
				<Menu />
			</div>

			{/* Login */}
			<div className="flex gap-4 justify-center items-center justify-self-end self-center text-white">
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
