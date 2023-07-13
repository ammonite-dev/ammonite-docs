import type { FontSize, FontWeight, TextAlign } from '$lib/types';

export const FONT_SIZES: Record<FontSize, string> = {
	none: '',
	title: 'sm:text-4xl text-3xl',
	subtitle: 'sm:text-3xl text-2xl',
	label: 'sm:text-xl text-lg',
	text: 'sm:text-lg text-base',
	subtext: 'sm:text-base text-sm',
	xs: 'text-xs',
	sm: 'text-sm',
	base: 'text-base',
	lg: 'text-lg',
	xl: 'text-xl',
	'2xl': 'text-2xl',
	'3xl': 'text-3xl',
	'4xl': 'text-4xl',
	'5xl': 'text-5xl',
	'6xl': 'text-6xl',
	'7xl': 'text-7xl',
	'8xl': 'text-8xl',
	'9xl': 'text-9xl'
};
export const FONT_WEIGHT: Record<FontWeight, string> = {
	none: '',
	thin: 'font-thin',
	extralight: 'font-extralight',
	light: 'font-light',
	normal: 'font-normal',
	medium: 'font-medium',
	semibold: 'font-semibold',
	bold: 'font-bold',
	extrabold: 'font-extrabold',
	black: 'font-black'
};
export const TEXT_ALIGN: Record<TextAlign, string> = {
	none: '',
	left: 'text-left',
	right: 'text-right',
	center: 'text-center'
};
