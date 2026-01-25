import { useEffect, useRef } from 'react';

export default function AnalyticsTracker({
	sessionId,
	productId,
	isAiStream,
	mediaType,
}) {
	const startTime = useRef(Date.now());

	const logEvent = (action, metadata = {}) => {
		const payload = JSON.stringify({
			session_id: sessionId,
			timestamp: new Date().toISOString(),
			product_id: productId,
			stream_type: isAiStream ? 'AI' : 'HUMAN',
			media_type: mediaType, // 'VIDEO' or 'AUDIO'
			action: action,
			...metadata,
		});

		// sendBeacon is reliable for exit events
		navigator.sendBeacon('/api/log', payload);
	};

	useEffect(() => {
		// page load
		logEvent('PAGE_VIEW_START');

		// tab switching
		const handleVisibility = () => {
			if (document.hidden) {
				logEvent('TAB_HIDDEN');
			} else {
				logEvent('TAB_VISIBLE');
			}
		};
		document.addEventListener('visibilitychange', handleVisibility);

		// tab close / navigation away
		const handleUnload = () => {
			const timeSpent = (Date.now() - startTime.current) / 1000;
			logEvent('SESSION_END', { duration_seconds: timeSpent });
		};
		window.addEventListener('beforeunload', handleUnload);

		return () => {
			document.removeEventListener('visibilitychange', handleVisibility);
			window.removeEventListener('beforeunload', handleUnload);
		};
	}, []);

	return null;
}
