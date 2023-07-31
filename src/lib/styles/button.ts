export const CTA_BUTTON_STYLE = `
    text-white
    py-2 px-6 rounded-full
    bg-gradient-to-r
    duration-300
    cursor-pointer
    hover:opacity-90
    from-palette-700 to-palette-500
    dark:from-palette-900 dark:to-palette-500
    disabled:cursor-not-allowed
    disabled:opacity-75
    `;

const LARGE_BUTTON_1 = `
    cursor-pointer
    duration-300
    rounded-lg
    sm:py-2.5 sm:px-5
    py-2.5 px-4
`;

const SMALL_BUTTON_1 = `
    cursor-pointer
    duration-300
    rounded-lg
    sm:py-1.5 sm:px-4
    py-1.5 px-2.5
`;

const MEDIUM_BUTTON_1 = `
    cursor-pointer
    duration-300
    rounded-lg
    sm:py-2 sm:px-5
    py-2 px-3
`;

export const PRIMARY_BUTTON_MEDIUM_STYLE = `
    ${MEDIUM_BUTTON_1}
    font-bold

    text-zinc-100
    dark:text-zinc-800

    bg-zinc-800
    hover:bg-zinc-700

    dark:bg-zinc-100
    dark:hover:bg-zinc-300

    disabled:cursor-not-allowed
    disabled:opacity-75
`;

export const PRIMARY_BUTTON_SMALL_STYLE = `
    ${SMALL_BUTTON_1}
    font-bold

    text-zinc-100
    dark:text-zinc-800

    bg-zinc-800
    hover:bg-zinc-700

    dark:bg-zinc-100
    dark:hover:bg-zinc-300

    disabled:cursor-not-allowed
    disabled:opacity-75
`;

export const OUTLINE_ERROR_BUTTON_SMALL_STYLE = `
    ${SMALL_BUTTON_1}
    font-bold

    bg-transparent
    border-solid border

    text-red-800
    dark:text-red-300

    border-re-800
    dark:border-red-300

    hover:opacity-75
`;

export const OUTLINE_BUTTON_SMALL_STYLE = `
    ${SMALL_BUTTON_1}
    font-bold
    bg-transparent
    border-solid border

    text-zinc-800
    dark:text-zinc-300

    border-zinc-800
    dark:border-zinc-300

    hover:opacity-75
`;

export const OUTLINE_BUTTON_MEDIUM_STYLE = `
    ${MEDIUM_BUTTON_1}
    font-bold
    bg-transparent
    border-solid border

    text-zinc-800
    dark:text-zinc-300

    border-zinc-800
    dark:border-zinc-300

    hover:opacity-75
`;
