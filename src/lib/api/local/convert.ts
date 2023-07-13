export function base64ToString(encoded: string): string {
	return decodeURIComponent(escape(atob(encoded)));
}

export function stringToBase64(s: string): string {
	return btoa(unescape(encodeURIComponent(s)));
}
