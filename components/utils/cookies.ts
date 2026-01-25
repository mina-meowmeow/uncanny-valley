export function getSessionId() {
	// Simple regex to parse the cookie from the browser
	const match = document.cookie.match(
		new RegExp('(^| )experiment_session=([^;]+)'),
	);
	if (match) return match[2];
	return null;
}
