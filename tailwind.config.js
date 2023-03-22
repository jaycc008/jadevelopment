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
			fontSize: {
				cta: ['2rem', '2.5rem'], // 32px,
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
				100: '25rem', // 200px
			},
			backgroundImage: {
				'hero-background': "url('../public/images/jayce-yuna.png')",
			},
		},
	},
	plugins: [],
}
