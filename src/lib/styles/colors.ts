export type FontColor =
	| 'none'
	| 'primary'
	| 'secondary'
	| 'tertiary'
	| 'accent-primary'
	| 'accent-secondary'
	| 'accent-tertiary';
export type BorderColor =
	| 'none'
	| 'primary'
	| 'secondary'
	| 'tertiary'
	| 'accent-primary'
	| 'accent-secondary'
	| 'accent-tertiary';
export type FontSize =
	| 'none'
	| 'title'
	| 'subtitle'
	| 'label'
	| 'text'
	| 'subtext'
	| 'xs'
	| 'sm'
	| 'base'
	| 'lg'
	| 'xl'
	| '2xl'
	| '3xl'
	| '4xl'
	| '5xl'
	| '6xl'
	| '7xl'
	| '8xl'
	| '9xl';
export type FontWeight =
	| 'none'
	| 'thin'
	| 'extralight'
	| 'light'
	| 'normal'
	| 'medium'
	| 'semibold'
	| 'bold'
	| 'extrabold'
	| 'black';
export type TextAlign = 'none' | 'center' | 'left' | 'right';
export type BackgroundColor = 'none' | 'primary' | 'secondary' | 'tertiary' | 'error' | 'success';

export const BACKGROUND_COLOR: Record<BackgroundColor, string> = {
	none: '',
	primary: 'bg-light-bg-primary dark:bg-dark-bg-primary',
	secondary: 'bg-light-bg-secondary dark:bg-dark-bg-secondary',
	tertiary: 'bg-light-bg-tertiary dark:bg-dark-bg-tertiary',
	error: 'bg-light-bg-error dark:bg-dark-bg-error',
	success: 'bg-light-bg-success dark:bg-dark-bg-success'
};
export const BACKGROUND_COLOR_REVERSE: Record<BackgroundColor, string> = {
	none: '',
	primary: 'bg-dark-bg-primary dark:bg-light-bg-primary',
	secondary: 'bg-dark-bg-secondary dark:bg-light-bg-secondary',
	tertiary: 'bg-dark-bg-tertiary dark:bg-light-bg-tertiary',
	error: 'bg-dark-bg-error dark:bg-light-bg-error',
	success: 'bg-dark-bg-success dark:bg-light-bg-success'
};

export const BACKGROUND_COLOR_HOVER: Record<BackgroundColor, string> = {
	none: '',
	primary: 'hover:bg-light-bg-primary hover:dark:bg-dark-bg-primary',
	secondary: 'hover:bg-light-bg-secondary hover:dark:bg-dark-bg-secondary',
	tertiary: 'hover:bg-light-bg-tertiary hover:dark:bg-dark-bg-tertiary',
	error: 'hover:bg-light-bg-error/25 hover:dark:bg-dark-bg-error/25',
	success: 'hover:bg-light-bg-success/25 hover:dark:bg-dark-bg-success/25'
};
export const BACKGROUND_COLOR_HOVER_REVERSE: Record<BackgroundColor, string> = {
	none: '',
	primary: 'hover:bg-dark-bg-primary/25 hover:dark:bg-light-bg-primary/25',
	secondary: 'hover:bg-dark-bg-secondary/25 hover:dark:bg-light-bg-secondary/25',
	tertiary: 'hover:bg-dark-bg-tertiary/25 hover:dark:bg-light-bg-tertiary/25',
	error: 'hover:bg-dark-bg-error hover:dark:bg-light-bg-error',
	success: 'hover:bg-dark-bg-success hover:dark:bg-light-bg-success'
};

export const FONT_COLOR: Record<FontColor, string> = {
	none: '',
	primary: 'text-light-text-primary dark:text-dark-text-primary',
	secondary: 'text-light-text-secondary dark:text-dark-text-secondary',
	tertiary: 'text-light-text-tertiary dark:text-dark-text-tertiary',
	'accent-primary': 'text-light-accent-primary dark:text-dark-accent-primary',
	'accent-secondary': 'text-light-accent-secondary dark:text-dark-accent-secondary',
	'accent-tertiary': 'text-light-accent-tertiary dark:text-dark-accent-tertiary'
};
export const FONT_COLOR_REVERSE: Record<FontColor, string> = {
	none: '',
	primary: 'text-dark-text-primary dark:text-light-text-primary',
	secondary: 'text-dark-text-secondary dark:text-light-text-secondary',
	tertiary: 'text-dark-text-tertiary dark:text-light-text-tertiary',
	'accent-primary': 'text-dark-accent-primary dark:text-light-accent-primary',
	'accent-secondary': 'text-dark-accent-secondary dark:text-light-accent-secondary',
	'accent-tertiary': 'text-dark-accent-tertiary dark:text-light-accent-tertiary'
};
export const FONT_COLOR_HOVER: Record<FontColor, string> = {
	none: '',
	primary: 'hover:text-light-text-primary/75 hover:dark:text-dark-text-primary/75',
	secondary: 'hover:text-light-text-secondary/75 hover:dark:text-dark-text-secondary/75',
	tertiary: 'hover:text-light-text-tertiary/75 hover:dark:text-dark-text-tertiary/75',
	'accent-primary': 'hover:text-light-accent-primary/75 hover:dark:text-dark-accent-primary/75',
	'accent-secondary':
		'hover:text-light-accent-secondary/75 hover:dark:text-dark-accent-secondary/75',
	'accent-tertiary': 'hover:text-light-accent-tertiary/75 hover:dark:text-dark-accent-tertiary/75'
};

export const BORDER_COLOR: Record<BorderColor, string> = {
	none: '',
	primary: 'border-light-border-primary dark:border-dark-border-primary',
	secondary: 'border-light-border-secondary dark:border-dark-border-secondary',
	tertiary: 'border-light-border-tertiary dark:border-dark-border-tertiary',
	'accent-primary': 'border-light-accent-primary dark:border-dark-accent-primary',
	'accent-secondary': 'border-light-accent-secondary dark:border-dark-accent-secondary',
	'accent-tertiary': 'border-light-accent-tertiary dark:border-dark-accent-tertiary'
};
export const BORDER_COLOR_REVERSE: Record<BorderColor, string> = {
	none: '',
	primary: 'border-dark-border-primary dark:border-light-border-primary',
	secondary: 'border-dark-border-secondary dark:border-light-border-secondary',
	tertiary: 'border-dark-border-tertiary dark:border-light-border-tertiary',
	'accent-primary': 'border-dark-accent-primary dark:border-light-accent-primary',
	'accent-secondary': 'border-dark-accent-secondary dark:border-light-accent-secondary',
	'accent-tertiary': 'border-dark-accent-tertiary dark:border-light-accent-tertiary'
};
export const BORDER_COLOR_FOCUS: Record<BorderColor, string> = {
	none: '',
	primary: 'focus:border-light-border-primary focus:dark:border-dark-border-primary',
	secondary: 'focus:border-light-border-secondary focus:dark:border-dark-border-secondary',
	tertiary: 'focus:border-light-border-tertiary focus:dark:border-dark-border-tertiary',
	'accent-primary': 'focus:border-light-accent-primary focus:dark:border-dark-accent-primary',
	'accent-secondary': 'focus:border-light-accent-secondary focus:dark:border-dark-accent-secondary',
	'accent-tertiary': 'focus:border-light-accent-tertiary focus:dark:border-dark-accent-tertiary'
};
