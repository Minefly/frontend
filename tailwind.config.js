const colors = require("tailwindcss/colors");

module.exports = {
	purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	darkMode: "media", // or 'media' or 'class'
	theme: {
		fontFamily: {
			sans: ["Inter", "Roboto", "ui-sans-serif", "system-ui", "sans-serif"],
		},
		extend: {
			typography: (theme) => ({
				dark: {
					css: [
						{
							h1: {
								color: theme("colors.white"),
							},
							h2: {
								color: theme("colors.white"),
							},
							h3: {
								color: theme("colors.white"),
							},
							h4: {
								color: theme("colors.white"),
							},
							h5: {
								color: theme("colors.white"),
							},
							h6: {
								color: theme("colors.white"),
							},
						},
					],
				},
			}),
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
	variants: {
		extend: {
			typography: ["dark"],
		},
	},
	plugins: [require("@tailwindcss/typography")],
};
