import { ToastContainer } from "react-toastify";
import Route from "./router/Route";
import { useAuth } from "./hooks/use-auth";
import Loading from "./components/Loading";

export default function App() {
	const { initialLoading } = useAuth();
	if (initialLoading) {
		return <Loading />;
	}

	return (
		<>
			<Route />
		</>
	);
}
