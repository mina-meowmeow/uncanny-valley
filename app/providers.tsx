'use client';

import type React from 'react';
import { SessionsProvider } from '@/lib/contexts/sessionsContext';

export default function Providers({ children }: { children: React.ReactNode }) {
	return <SessionsProvider>{children}</SessionsProvider>;
}
