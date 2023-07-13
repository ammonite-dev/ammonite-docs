import { BACKGROUND_COLOR, FONT_COLOR, FONT_COLOR_HOVER } from '$lib/constants/colors';

const HAMBURGER_BUTTON_SHARED = `
    h-2 bg-current my-0.5 duration-300 ease-out
    `;

export const HAMBURGER_BUTTON_1 = `
    w-8 ${BACKGROUND_COLOR['secondary']} ${HAMBURGER_BUTTON_SHARED}
    `;

export const HAMBURGER_BUTTON_OPEN_SHARED = `
    h-0.5 bg-current my-2 duration-300 ease-out
    bg-light-text-primary
    dark:bg-dark-text-primary
    `;

export const HAMBURGER_BUTTON_1_OPEN = `
    ${HAMBURGER_BUTTON_OPEN_SHARED}
    w-6 rotate-45 translate-y-2.5
    `;

export const HAMBURGER_BUTTON_2_OPEN = `
    ${HAMBURGER_BUTTON_OPEN_SHARED}
    w-6 opacity-0`;
export const HAMBURGER_BUTTON_3_OPEN = `
    ${HAMBURGER_BUTTON_OPEN_SHARED}
    w-6 -rotate-45 -translate-y-2.5`;

const HAMBURGER_MENU_SHARED = `
    ${BACKGROUND_COLOR['secondary']}
    fixed w-full z-10
    overflow-auto
    left-0 top-0 right-0 bottom-0
    duration-500
    transition-all
    `;

export const HAMBURGER_MENU_CLOSED = `
    opacity-0 translate-x-full
    ${HAMBURGER_MENU_SHARED}`;

export const HAMBURGER_MENU_OPENED = `${HAMBURGER_MENU_SHARED}`;

export const HAMBURGER_MENU_LINK = `
    w-full duration-300
    ${FONT_COLOR['primary']}
    ${FONT_COLOR_HOVER['accentPrimary']}
    hover:bg-light-bg-primary/25 hover:dark:bg-dark-mary/25
    `;
export const HAMBURGER_MENU_LINK_CURRENT = `
    w-full duration-300
    ${FONT_COLOR['accentPrimary']}
    ${FONT_COLOR_HOVER['accentPrimary']}
    hover:bg-light-bg-primary/25 hover:dark:bg-dark-bg-primary/25
    `;
