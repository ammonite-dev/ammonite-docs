import { FONT_SIZES, FONT_WEIGHT } from '$lib/styles/fonts';

export const INPUT_LABEL_STYLE = `
    ${FONT_SIZES['label']}
    ${FONT_WEIGHT['bold']}
`;

export const INPUT_STYLE = `
    my-1
    px-2 py-2
    rounded-md
    ${FONT_SIZES['text']}
    outline-none
    border-2
    border-gray-400
    focus:border-light-accentPrimary
    dark:focus:border-dark-primary
    bg-light-bg-secondary
    dark:bg-dark-bg-secondary
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
