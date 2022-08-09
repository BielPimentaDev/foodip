/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {},
		fontFamily: {
			inter: 'Inter',
			mont: 'Montserrat',
		},
		colors: {
			red: '#DA2535',
			gray: '#616161',
			black: '#292929',
			white: {
				100: '#FBFBFB',
				200: '#F3F3F3',
			},
		},
	},
	plugins: [],
};
