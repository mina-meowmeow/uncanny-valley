import { useEffect, useRef } from 'react';
import { logEvent } from './utils/analytics';

export default function AnalyticsTracker({
	sessionId,
	productId,
	isAiStream,
	mediaType,
}) {
	const startTime = useRef(Date.now());
	const sessionMetadata = { sessionId, productId, isAiStream, mediaType };

	useEffect(() => {
		// page load
		logEvent('PAGE_VIEW_START', sessionMetadata);

		// tab switching
		const handleVisibility = () => {
			if (document.hidden) {
				logEvent('TAB_HIDDEN', sessionMetadata);
			} else {
				logEvent('TAB_VISIBLE', sessionMetadata);
			}
		};
		document.addEventListener('visibilitychange', handleVisibility);

		const handleUnload = () => {
			const timeSpent = (Date.now() - startTime.current) / 1000;
			logEvent('SESSION_END', {
				duration_seconds: timeSpent,
				...sessionMetadata,
			});
		};
		window.addEventListener('beforeunload', handleUnload);

		return () => {
			document.removeEventListener('visibilitychange', handleVisibility);
			window.removeEventListener('beforeunload', handleUnload);
		};
	}, []);

	return null;
}
