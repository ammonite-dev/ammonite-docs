import { BACKGROUND_COLOR, BACKGROUND_COLOR_HOVER, BORDER_COLOR } from '$lib/styles/colors';

export const BORDERED_STYLE = `
    border
    p-2.5
    rounded-md
    duration-300
    ${BORDER_COLOR['secondary']}
`;

export const BORDERED_HOVER_STYLE = `
    ${BORDERED_STYLE}
`;

export const FILE_EXPLORER_ACTION_STYLE = `
    ${BORDERED_HOVER_STYLE}
    hover:opacity-50
`;

export const ATTACHMENT_PREVIEW_STYLE = `
    w-56
    rounded
`;

export const FILE_EXPLORER_STYLE = `
    flex flex-row flex-wrap
    w-full
    items-start
    rounded overflow-auto
`;

export const FILE_EXPLORER_FOLDER_STYLE = `
    ${BORDERED_HOVER_STYLE}
    ${BACKGROUND_COLOR['secondary']}
    w-56 m-2
`;

export const FILE_EXPLORER_ITEM = `
    ${BORDERED_HOVER_STYLE}
    ${BACKGROUND_COLOR['secondary']}
    w-56 m-2
`;

export const FILE_EXPLORER_ITEM_BUTTON = `
    ${FILE_EXPLORER_ITEM}
    ${BACKGROUND_COLOR['secondary']}
`;

export const FILE_EXPLORER_THUMBNAIL_STYLE = `
    w-full h-40 object-cover rounded
`;

export const ASSET_ACTION_MENU_STYLE = `
    px-4 py-3
    w-full
    font-md
    duration-300
`;

export const PENDING_UPLOAD_ITEM = `
    ${BORDERED_HOVER_STYLE}
    ${BACKGROUND_COLOR['tertiary']}
    w-44 m-2
`;

export const PENDING_UPLOAD_THUMBNAIL_STYLE = `
    w-44 h-24 object-cover rounded
`;
