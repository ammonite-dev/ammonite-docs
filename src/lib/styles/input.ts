import {
	BACKGROUND_COLOR,
	BORDER_COLOR,
	BORDER_COLOR_FOCUS,
	BORDER_COLOR_REVERSE
} from '$lib/styles/colors';

export const INPUT_LABEL_STYLE = `
    text-base
    font-bold
`;

export const INPUT_STYLE = `
    my-1
    px-2 py-2
    rounded-md
    outline-none
    border-2
    ${BORDER_COLOR_REVERSE['tertiary']}
    ${BORDER_COLOR_FOCUS['tertiary']}
    ${BACKGROUND_COLOR['secondary']}
`;

export const INPUT_SUBMIT_STYLE = `
    text-white
    py-2 px-6 rounded-full
    bg-gradient-to-r
    duration-300
    cursor-pointer
    from-palette-700 to-palette-500
    dark:from-palette-900 dark:to-palette-500
    hover:opacity-90
    disabled:cursor-not-allowed
    disabled:opacity-75
`;
