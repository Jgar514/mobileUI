/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx, tsx}"],
	theme: {
		extend: {
			colors: {
				back: "#f06123",
				back2: "#F5F8FA",
				button: "#F3F4F6",
				type: "#24292f",
				ol: "#1F2328",
			},
		},
	},
	plugins: [],
};
