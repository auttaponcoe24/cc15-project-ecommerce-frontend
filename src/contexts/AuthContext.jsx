import axios from "../config/axios";
import { createContext, useEffect, useState } from "react";
import {
	addAccessToken,
	getAccessToken,
	removeAccessToken,
} from "../utils/local-storage";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
	const [authUser, setAuthUser] = useState(null); // { id, firstName, lastName, address}
	const [initialLoading, setInitialLoading] = useState(true);

	useEffect(() => {
		if (getAccessToken()) {
			axios
				.get("/auth/me")
				.then((res) => {
					setAuthUser(res.data.user);
				})
				.catch((err) => console.log(err))
				.finally(() => {
					setInitialLoading(false);
				});
		} else {
			setInitialLoading(false);
		}
	}, []);

	const login = async (credential) => {
		const res = await axios.post("/auth/login", credential);
		addAccessToken(res.data.accessToken);
		setAuthUser(res.data.user);
		// console.log(res.data.user);
		// window.location.reload();
	};

	const register = async (registerInput) => {
		const res = await axios.post("/auth/register", registerInput);
		addAccessToken(res.data.accessToken);
		setAuthUser(res.data.user);
	};

	const logout = async () => {
		removeAccessToken();
		setAuthUser(null);
		window.location.reload();
	};

	const editAccount = async (data) => {
		const res = await axios.patch("/auth/editaccount", data);
		// console.log(res.data);
		setAuthUser(res.data.editAccount);
	};

	return (
		<AuthContext.Provider
			value={{
				login,
				authUser,
				register,
				logout,
				initialLoading,
				getAccessToken,
				editAccount,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
}
