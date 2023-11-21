import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import AuthContextProvider from "./contexts/AuthContext.jsx";
import ProductContextProvider from "./contexts/ProductContext.jsx";

import { ThemeProvider } from "@material-tailwind/react";

ReactDOM.createRoot(document.getElementById("root")).render(
	// <React.StrictMode>
	<AuthContextProvider>
		<ProductContextProvider>
			<ThemeProvider>
				<App />
			</ThemeProvider>
		</ProductContextProvider>
	</AuthContextProvider>
	// </React.StrictMode>,
);
