import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/use-auth";

export default function RedirectIfAuthenticated({ children }) {
	const { authUser } = useAuth();
	if (authUser) {
		console.log(authUser.role);
		if (authUser.role === "ADMIN") {
			return <Navigate to="/admin" />;
		}
		if (authUser.role === "USER") {
			return <Navigate to="/" />;
		}
	}
	return children;
}
