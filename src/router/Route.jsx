import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import HomePage from "../pages/HomePage";
import ProductPage from "../pages/ProductPage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import RedirectIfAuthenticated from "../features/auth/RedirectIfAuthenticated";
import Authenticated from "../features/auth/Authenticated";
import CategoryPage from "../pages/CategoryPage";
import CartPage from "../pages/CartPage";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{ path: "", element: <HomePage /> },
			{ path: "category", element: <CategoryPage /> },
			{ path: "product/:productId", element: <ProductPage /> },
			{ path: "about", element: <AboutPage /> },
			{ path: "contact", element: <ContactPage /> },
			{
				path: "/cart",
				element: (
					<Authenticated>
						<CartPage />
					</Authenticated>
				),
			},
		],
	},
	{
		path: "/login",
		element: (
			<RedirectIfAuthenticated>
				<LoginPage />
			</RedirectIfAuthenticated>
		),
	},

	{
		path: "/register",
		element: (
			<RedirectIfAuthenticated>
				<RegisterPage />
			</RedirectIfAuthenticated>
		),
	},
]);

export default function Route() {
	return <RouterProvider router={router} />;
}
