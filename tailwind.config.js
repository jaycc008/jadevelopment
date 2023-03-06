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
				'ui-serif',
				'Georgia',
				'Cambria',
				'Times New Roman',
				'Times',
				'serif',
			],
			mono: [
				'Roboto Mono for powerline',
				'Roboto Mono',
				'ui-monospace',
				'SFMono-Regular',
				'Menlo',
				'Monaco',
				'Consolas',
				'Liberation Mono',
				'Courier New',
				'monospace',
			],
		},
		extend: {
			colors: {
				'pink-1': '#941B85',
				'pink-2': '#871C84',
				'pink-3': '#7B1E83',
				'blue': '#303AEB',
				'onyx': '#1a1a1a',
			},
			spacing: {
				18: '4.5rem', // 72px
				28: '7rem', // 112px
				50: '12.5rem', // 200px
				100: '25rem', // 200px
			},
			backgroundImage: {
				'hero-background': "url('../public/images/jayce-yuna.jpg')",
			},
		},
	},
	plugins: [],
}
