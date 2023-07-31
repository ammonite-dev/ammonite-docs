const SEA_PALETTE = {
	100: '#CAE9FF',
	200: '#BEE9E8',
	300: '#62B6CB',
	500: '#5FA8D3',
	700: '#1B4965'
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
	700: '#FF963A'
};

const BRAND_SECONDARY = {
	100: '#D4B1FC',
	300: '#BE89FA',
	500: '#A863F8',
	700: '#8E35F5'
};

/** @type {import('tailwindcss').Config} */
const config = {
	darkMode: 'class',
	content: [
		'./src/**/*.{html,js,svelte,ts,rs,liquid}',
		// 2. Append the path for the Skeleton NPM package and files:
		require('path').join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')
	],
	theme: {
		extend: {
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
				sans: ['Nunito', 'sans'],
				serif: ['Nunito', 'sans-serif'],
				mono: ['Fira Code', 'monospace']
			},
			colors: {
				dark: {
					accent: {
						primary: PALETTE_1[300],
						secondary: PALETTE_1[500],
						tertiary: PALETTE_1[900]
					},
					bg: {
						primary: '#000000',
						secondary: '#18181b',
						tertiary: '#27272a',
						error: '#991b1b',
						success: '#07d95a'
					},
					text: {
						primary: '#ffffff',
						secondary: '#f4f4f5',
						tertiary: '#e4e4e7',
						link: '#059669'
					},
					border: {
						primary: '#f4f4f5',
						secondary: '#e4e4e7',
						tertiary: '#71717a'
					}
				},
				light: {
					accent: {
						primary: PALETTE_1[900],
						secondary: PALETTE_1[500],
						tertiary: PALETTE_1[300]
					},
					bg: {
						primary: '#ffffff',
						secondary: '#f4f4f5',
						tertiary: '#e4e4e7',
						error: '#f8183e',
						success: '#059669'
					},
					text: {
						primary: '#000000',
						secondary: '#18181b',
						tertiary: '#27272a'
					},
					border: {
						primary: '#18181b',
						secondary: '#27272a',
						tertiary: '#71717a'
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
	plugins: [
		// 3. Append the Skeleton plugin to the end of this list
		...require('@skeletonlabs/skeleton/tailwind/skeleton.cjs')()
	]
};

module.exports = config;
