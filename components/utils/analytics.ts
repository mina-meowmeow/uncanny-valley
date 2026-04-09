export const logEvent = async (action, metadata = {}) => {
	const payload = JSON.stringify({
		page_url: window.location.pathname,
		action: action,
		// ...metadata,
	});

	const blob = new Blob([payload], { type: 'application/json' });
	navigator.sendBeacon('/api/log', blob);
};
