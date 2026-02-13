'use client';

import React, {
	createContext,
	useContext,
	useEffect,
	useMemo,
	useState,
} from 'react';
import { useRouter } from 'next/navigation';

export type UserData = {
	name?: string;
	experimentConfig?: {
		viewType?: 'product' | 'livestream';
		presenterType?: 'ai' | 'human';
	};
	[key: string]: unknown;
} | null;

export type SessionData = {
	sessionId?: string;
	userData?: UserData;
} | null;

type SessionContextValue = {
	session: SessionData;
	setSession: React.Dispatch<React.SetStateAction<SessionData>>;
	loading: boolean;
};

const SessionContext = createContext<SessionContextValue | undefined>(
	undefined,
);

export type SessionsProviderProps = {
	children: React.ReactNode;
	initialSession?: SessionData;
};

export const SessionsProvider = ({
	children,
	initialSession = null,
}: SessionsProviderProps) => {
	const [session, setSession] = useState<SessionData>(initialSession);
	const [loading, setLoading] = useState(true);
	const router = useRouter();

	useEffect(() => {
		const logoutAndRedirect = async () => {
			try {
				await fetch('/api/auth/logout', { method: 'POST' });
			} catch (error) {
				console.error('Auto-logout failed:', error);
			} finally {
				router.replace('/login');
			}
		};

		const verifyAuth = async () => {
			try {
				const response = await fetch('/api/auth/verify');
				if (response.ok) {
					const data: SessionData = await response.json();
					if (data?.sessionId) {
						setSession(data ?? null);
					} else {
						setSession(null);
						await logoutAndRedirect();
					}
				} else {
					setSession(null);
					await logoutAndRedirect();
				}
			} catch (error) {
				console.error('Auth verification failed:', error);
				setSession(null);
				await logoutAndRedirect();
			} finally {
				setLoading(false);
			}
		};

		verifyAuth();
	}, [router]);

	const value = useMemo(
		() => ({ session, setSession, loading }),
		[session, loading],
	);

	return (
		<SessionContext.Provider value={value}>{children}</SessionContext.Provider>
	);
};

export const useSession = (): SessionContextValue => {
	const context = useContext(SessionContext);
	if (!context) {
		throw new Error('useSession must be used within a SessionsProvider');
	}

	return context;
};
