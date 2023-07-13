const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

const ACCENT = {
	100: '#EAD7D7',
	300: '#C7A8C6',
	500: '#A06A9D',
	900: '#6D466B'
};

const PALETTE_1 = {
	100: '#FAE993',
	300: '#F5B38C',
	500: '#E09795',
	700: '#BC8299',
	900: '#907191'
};

const BRAND_PRIMARY = {
	100: '#FDE9D8',
	300: '#FBD4B1',
	500: '#F8B377',
	700: '#FF963A',
	900: '#a14a00'
};

const BRAND_SECONDARY = {
	100: '#D4B1FC',
	300: '#BE89FA',
	500: '#A863F8',
	700: '#8E35F5'
};

/** @type {import('tailwindcss').Config} */
const config = {
	content: ['./src/**/*.{html,js,svelte,ts,rs,liquid}'],
	darkMode: 'class',
	theme: {
		boxShadow: {
			md: '0 0 12px -4px #808080',
			'md-dark': '0 0 12px -4px #808080'
		},
		fontSize: {
			sm: '0.875rem',
			base: '1rem',
			lg: '1.125rem',
			xl: '1.25rem',
			['2xl']: '1.5rem',
			['3xl']: '1.875rem',
			['4xl']: '2.25rem',
			['5xl']: '3rem',
			label: '0.875rem',
			title: '1.25rem',
			normal: '14px'
		},
		fontFamily: {
			sans: ['Roboto', 'sans'],
			serif: ['Roboto', 'sans-serif'],
			mono: ['Fira Code', 'monospace'],
			logo: ['Poppins', 'sans']
		},
		extend: {
			colors: {
				errorDark: '#f8183e',
				errorLight: '#fca3b2',
				successDark: '#07D95A',
				successLight: '#9CF0BD',
				primary: BRAND_PRIMARY,
				secondary: BRAND_SECONDARY,
				palette: PALETTE_1,
				light: {
					primary: PALETTE_1[900],
					secondary: PALETTE_1[500],
					tertiary: PALETTE_1[300],
					bg: {
						primary: '#ddd8cf',
						secondary: '#efece3',
						tertiary: '#e5e0d1'
					},
					text: {
						primary: '#0f0f0f',
						secondary: '#1c1c1c',
						tertiary: '#494949'
					},
					system: {
						error: '#e57373'
					}
				},
				dark: {
					primary: PALETTE_1[300],
					secondary: PALETTE_1[500],
					tertiary: PALETTE_1[900],
					bg: {
						primary: '#1e1e21',
						secondary: '#232326',
						tertiary: '#2b2c2f'
					},
					text: {
						primary: '#f0f0f0',
						secondary: '#ececec',
						tertiary: '#aaaaaa'
					},
					system: {
						error: '#e57373'
					}
				}
			},
			animation: {
				'slide-fade-in': 'keyframes-slide-fade-in 500ms ease-out'
			},
			keyframes: {
				'keyframes-slide-fade-in': {
					'0%': {
						opacity: 0,
						translate: '0% 5%'
					},
					'100%': {
						opacity: 1,
						translate: '0% 0%'
					}
				}
			}
		}
	},
	plugins: []
};

module.exports = config;
