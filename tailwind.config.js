const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */

module.exports = withMT({
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	theme: {
		extend: {
			// 	backgroundColor: {
			// 		primary: "#FFC24B",
			// 		secondary: "#EF4444",
			// 	},
			textColor: {
				primary: "#560bad",
				secondary: "#b5179e",
			},
			// 	outlineColor: {
			// 		primary: "#EF4444",
			// 	},
			// 	borderColor: {
			// 		primary: "#EF4444",
			// 	},
		},
		fontFamily: {
			kanit: ["Kanit", "sans-serif"],
		},
		screens: {
			xs: "320px",
			sm: "578px",
			md: "768px",
			lg: "1024px",
			xl: "1280px",
			"2xl": "1536px",
		},
	},
	plugins: [],
});

// export default {
// 	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
// 	theme: {
// 		extend: {},
// 	},
// 	plugins: [],
// };
