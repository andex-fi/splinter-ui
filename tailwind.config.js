/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				transparent: "transparent",
				current: "currentColor",
				"dark-blue-splinter": "#0E0122",
				"light-blue-splinter": "#120036",
				"light-pink-splinter": "#fa98ff",
				"grey-spliner": "rgba(255, 255, 255, 0.16)",
			},
			fontFamily: {
				clashDisplay: ["ClashDisplay-Medium", "ClashDisplay-light"],
			},
		},
	},
	plugins: [],
};
