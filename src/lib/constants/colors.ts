import type { BackgroundColor, FontColor } from '$lib/types';

export const BACKGROUND_COLOR: Record<BackgroundColor, string> = {
	none: '',
	primary: 'bg-light-bg-primary dark:bg-dark-bg-primary',
	secondary: 'bg-light-bg-secondary dark:bg-dark-bg-secondary',
	tertiary: 'bg-light-bg-tertiary dark:bg-dark-bg-tertiary',
	accentPrimary: 'bg-light-primary dark:bg-dark-primary',
	accentSecondary: 'bg-light-secondary dark:bg-dark-secondary',
	accentTertiary: 'bg-light-tertiary dark:bg-dark-tertiary'
};

export const BACKGROUND_COLOR_HOVER: Record<BackgroundColor, string> = {
	none: '',
	primary: 'hover:bg-light-bg-primary dark:hover:bg-dark-bg-primary',
	secondary: 'hover:bg-light-bg-secondary dark:hover:bg-dark-bg-secondary',
	tertiary: 'hover:bg-light-bg-tertiary dark:hover:bg-dark-bg-tertiary',
	accentPrimary: 'hover:bg-light-primary dark:hover:bg-dark-primary',
	accentSecondary: 'hover:bg-light-secondary dark:hover:bg-dark-secondary',
	accentTertiary: 'hover:bg-light-tertiary dark:hover:bg-dark-tertiary'
};

export const FONT_COLOR: Record<FontColor, string> = {
	none: '',
	primary: 'text-light-text-primary dark:text-dark-text-primary',
	secondary: 'text-light-text-secondary dark:text-dark-text-secondary',
	tertiary: 'text-light-text-tertiary dark:text-dark-text-tertiary',
	accentPrimary: 'text-light-primary dark:text-dark-primary',
	accentSecondary: 'text-light-secondary dark:text-dark-secondary',
	accentTertiary: 'text-light-tertiary dark:text-dark-tertiary'
};
export const FONT_COLOR_REVERSE: Record<FontColor, string> = {
	none: '',
	primary: 'text-dark-text-primary dark:text-light-text-primary',
	secondary: 'text-dark-text-secondary dark:text-light-text-secondary',
	tertiary: 'text-dark-text-tertiary dark:text-light-text-tertiary',
	accentPrimary: 'text-dark-primary dark:text-light-primary',
	accentSecondary: 'text-dark-secondary dark:text-light-secondary',
	accentTertiary: 'text-dark-tertiary dark:text-light-tertiary'
};
export const FONT_COLOR_HOVER: Record<FontColor, string> = {
	none: '',
	primary: 'hover:text-light-text-primary dark:hover:text-dark-text-primary',
	secondary: 'hover:text-light-text-secondary dark:hover:text-dark-text-secondary',
	tertiary: 'hover:text-light-text-tertiary dark:hover:text-dark-text-tertiary',
	accentPrimary: 'hover:text-light-primary dark:hover:text-dark-primary',
	accentSecondary: 'hover:text-light-secondary dark:hover:text-dark-secondary',
	accentTertiary: 'hover:text-light-tertiary dark:hover:text-dark-tertiary'
};
