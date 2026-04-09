'use client';

import React, {
	createContext,
	useContext,
	useEffect,
	useMemo,
	useState,
} from 'react';

export type UserData = {
	experimentConfig?: {
		viewType?: 'product' | 'livestream';
		presenterType?: 'ai' | 'human';
	};
	[key: string]: unknown;
} | null;

export type SessionData = {
	sessionId?: string;
	userData?: UserData;
	view_type?: 'product' | 'livestream';
	presenter_type?: 'ai' | 'human';
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

	useEffect(() => {
		// If we already have an initial session (from SSR), use it and skip fetching
		if (initialSession) {
			setLoading(false);
			return;
		}
	}, [initialSession]);

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
