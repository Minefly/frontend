const colors = require("tailwindcss/colors");

module.exports = {
	purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	darkMode: "media", // or 'media' or 'class'
	theme: {
		fontFamily: {
			sans: ["Inter", "Roboto", "ui-sans-serif", "system-ui", "sans-serif"],
		},
		extend: {
			colors: {
				primary: colors.indigo,
				secondary: colors.pink,
			},
		},
		borderWidth: {
			DEFAULT: "1px",
			0: "0",
			2: "2px",
			3: "3px",
			4: "4px",
			6: "6px",
			8: "8px",
		},
		container: {
			center: true,
			padding: {
				DEFAULT: "3rem",
				md: "10%",
				lg: "15%",
				xl: "25%",
			},
		},
	},
	variants: {},
	plugins: [],
};
