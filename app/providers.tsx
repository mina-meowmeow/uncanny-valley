'use client';

import type React from 'react';
import { SessionsProvider } from '@/lib/contexts/sessionsContext';

export default function Providers({
	children,
	initialSession,
}: {
	children: React.ReactNode;
	initialSession: any;
}) {
	return (
		<SessionsProvider initialSession={initialSession}>
			{children}
		</SessionsProvider>
	);
}
