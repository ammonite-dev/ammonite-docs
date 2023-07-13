import { BACKGROUND_COLOR, BACKGROUND_COLOR_HOVER } from '$lib/constants/colors';
import { FONT_SIZES } from './fonts';

export const DROPDOWN_MENU_STYLE = `
    block absolute top-0 right-0
    duration-300
    transition-all
    rounded-md
    mt-2
    z-100
    border
    ${BACKGROUND_COLOR['secondary']}
    `;

export const DROPDOWN_OPEN_STYLE = `
    ${DROPDOWN_MENU_STYLE}
    opacity-100
`;
export const DROPDOWN_CLOSE_STYLE = `
    ${DROPDOWN_MENU_STYLE}
    invisible
    opacity-0
    translate-y-1
`;

export const DROPDOWN_ITEM_STYLE = `
    px-4 py-3
    w-full
    ${BACKGROUND_COLOR_HOVER['accentTertiary']}
    ${FONT_SIZES['text']}
    duration-300
`;
