const colors = require("tailwindcss/colors");

module.exports = {
	purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	darkMode: "media", // or 'media' or 'class'
	theme: {
		extend: {},
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
	variants: {
		extend: {},
	},
	plugins: [],
};
