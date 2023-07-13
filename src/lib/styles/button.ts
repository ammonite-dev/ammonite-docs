export const OUTLINE_BUTTON_STYLE = `
    py-2 px-6 rounded-full
    duration-300
    bg-transparent
    border-solid border-2
    text-black
    dark:text-white
    border-black
    dark:border-white
    hover:bg-black/25
    hover:dark:bg-white/25
    `;

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

export const PRIMARY_BUTTON_STYLE = `
    text-black
    font-bold
    py-2 px-6 rounded-full
    duration-300
    cursor-pointer
    bg-primary-500
    hover:bg-primary-300
    disabled:cursor-not-allowed
    disabled:opacity-75
    disabled:bg-primary-500/75
`;
