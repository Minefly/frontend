const colors = require("tailwindcss/colors");

module.exports = {
    mode: "jit",
    purge: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class", // or 'media' or 'class'
    theme: {
        flexGrow: {
            DEFAULT: 1,
            2: 2,
        },
        fontFamily: {
            sans: [
                "Inter",
                "Roboto",
                "ui-sans-serif",
                "system-ui",
                "sans-serif",
            ],
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
                200: "50rem",
                0.75: "0.1875rem",
                min: "min-content",
                max: "max-content",
            },
            width: {
                "6/5": "120%",
                "full-14": "calc(100% - 20rem)",
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
            transitionProperty: {
                shape: "width, height",
                spacing: "margin, padding",
            },
            padding: {
                8.5: "2.125rem",
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
                DEFAULT: "2rem",
                lg: "3rem",
                // md: "10%",
                xl: "12rem",
                // xl: "25%",
            },
        },
    },
    variants: {},
    plugins: [],
};
