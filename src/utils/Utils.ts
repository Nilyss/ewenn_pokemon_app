const getURL = new URL(window.location.href);
export const isOnProduction: boolean = getURL.hostname !== "localhost";
