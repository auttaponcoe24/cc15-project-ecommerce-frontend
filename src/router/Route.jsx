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
import OrderPage from "../pages/OrderPage";
import AdminPage from "../pages/AdminPage";
import Orders from "../features/admin/Orders";
import Products from "../features/admin/Products";
import AuthenticatedAdmin from "../features/auth/AuthenticatedAdmin";
import LayoutAdmin from "../layout/LayoutAdmin";
import ProductAdd from "../features/admin/ProductAdd";
import MyAccountPage from "../pages/MyAccountPage";
import AccountSetting from "../features/auth/AccountSetting";

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
			{
				path: "/cart/confirmorder",
				element: (
					<Authenticated>
						<OrderPage />
					</Authenticated>
				),
			},
			{
				path: "/account",
				element: (
					<Authenticated>
						<MyAccountPage />
					</Authenticated>
				),
			},
			{
				path: "/account/setting",
				element: (
					<Authenticated>
						<AccountSetting />
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
	{
		path: "/admin",
		element: (
			<AuthenticatedAdmin>
				<LayoutAdmin />
			</AuthenticatedAdmin>
		),
		children: [
			{ path: "", element: <AdminPage /> },
			{
				path: "orders",
				element: <Orders />,
			},
			{
				path: "products",
				element: <Products />,
			},
			{
				path: "products/add",
				element: <ProductAdd />,
			},
		],
	},
]);

export default function Route() {
	return <RouterProvider router={router} />;
}
