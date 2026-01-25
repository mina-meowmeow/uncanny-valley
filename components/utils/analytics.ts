import { cookies } from 'next/headers';
export const logEvent = async (action, metadata = {}) => {
	const cookiesStore = await cookies();
	const sessionId = cookiesStore.get('session_id');

	if (!sessionId) return;

	const payload = JSON.stringify({
		session_id: sessionId,
		timestamp: new Date().toISOString(),
		page_url: window.location.pathname,
		action: action,
		...metadata,
	});

	const blob = new Blob([payload], { type: 'application/json' });
	navigator.sendBeacon('/api/log', blob);
};
