/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		fontFamily: {
			sans: [
				'Open Sans',
				'ui-sans-serif',
				'system-ui',
				'-apple-system',
				'BlinkMacSystemFont',
				'Segoe UI',
				'Roboto',
				'Helvetica Neue',
				'Arial',
				'Noto Sans',
				'sans-serif',
				'Apple Color Emoji',
				'Segoe UI Emoji',
				'Segoe UI Symbol',
				'Noto Color Emoji',
			],
			serif: [
				'Gloock',
				'ui-serif',
				'Georgia',
				'Cambria',
				'Times New Roman',
				'Times',
				'serif',
			],
		},
		extend: {
			fontSize: {
				'xs': '1.125rem', // 18px
				'sm': '1.5rem', // 24px
				'md': '2rem', // 32px
				'lg': '2.5rem', // 40px
				'title': '3rem', // 48px
				'xl': '5rem', // 80px
				'2xl': '6rem', // 96px
			},
			colors: {
				onyx: '#1a1a1a',
				platinum: '#E7E4DF',
				platinum_opacity: 'rgb(231, 228, 223, 0.4)',
				green: '#3D4E3C',
				lightgreen: '#798A78',
				yellow: '#DC9E00',
			},
			spacing: {
				18: '4.5rem', // 72px
				28: '7rem', // 112px
				30: '7.5rem', // 120px
				48: '12rem', // 192px
				50: '12.5rem', // 200px
				100: '25rem', // 400px
			},
			minHeight: {
				'1/2': '50%',
			},
		},
	},
	plugins: [],
}
