import { BACKGROUND_COLOR, FONT_COLOR_HOVER } from '$lib/constants/colors';

export const ARTICLE_STYLE = `
    ${BACKGROUND_COLOR['tertiary']}
    min-h-screen
    rounded-t-xl
    sm:px-12 sm:pb-8
    px-4 pb-2
    z-0
    overflow-x-auto
    `;

export const PAGE_ACTION_BAR_STYLE = `
    sm:pt-6 pt-4
    sm:pb-2 pb-1
    flex flex-row justify-end
`;

export const PAGE_ACTION_STYLE = `
    flex flex-row
    items-center
    whitespace-nowrap
    duration-300
    sm:mb-2 sm:ml-6
    mb-1 ml-6
    ${FONT_COLOR_HOVER['accentPrimary']}
`;
