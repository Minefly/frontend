const colors = require("tailwindcss/colors");

module.exports = {
	purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	darkMode: "media", // or 'media' or 'class'
	theme: {
		flexGrow: {
			DEFAULT: 1,
			2: 2,
		},
		fontFamily: {
			sans: ["Inter", "Roboto", "ui-sans-serif", "system-ui", "sans-serif"],
		},
		extend: {
			colors: {
				primary: colors.indigo,
				secondary: colors.pink,
				violet: colors.violet,
				gray: {
					850: "#1b2332",
				},
			},
			inset: {
				"1/5": "20%",
				"2/5": "40%",
				"3/5": "60%",
				"4/5": "80%",
			},
			height: {
				"6/5": "120vh",
			},
			width: {
				"6/5": "120%",
			},
			borderRadius: {
				"1/2": "50%",
			},
			minWidth: {
				200: "50rem",
			},
			zIndex: {
				"-10": "-10",
				"-20": "-20",
				"-30": "-30",
				"-40": "-40",
				"-50": "-50",
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
