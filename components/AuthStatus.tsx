'use client';

import { useRouter } from 'next/navigation';
import { LogOut } from 'lucide-react';
import { useSession } from '@/lib/contexts/sessionsContext';
import { useEffect } from 'react';

export default function AuthStatus() {
	const router = useRouter();
	const { session, setSession, loading } = useSession();

	const handleLogout = async () => {
		try {
			await fetch('/api/auth/logout', { method: 'POST' });
			setSession(null);
			router.push('/login');
		} catch (error) {
			console.error('Logout failed:', error);
		}
	};

	useEffect(() => {
		// If loading is done and there's no session, redirect to login
		if (!loading && !session) {
			router.push('/login');
		}
	}, [session, loading, router]);

	// 1. Show loading state while fetching session data
	if (loading) {
		return <div>Loading...</div>;
	}

	// 2. Prevent the authenticated UI from rendering while the redirect is happening
	if (!session) {
		return null; // or you could return a subtle <div className="invisible">...</div>
	}

	console.log('from authstatus:', session);
	// 3. We now safely know `session` exists, so we don't even need the optional chaining (?.)
	return (
		<div className="flex items-center gap-4">
			<span className="text-sm text-muted-foreground">
				Session:{' '}
				<span className="font-mono text-xs">
					{session.session_id ? session.session_id : 'N/A'}
				</span>
			</span>
			<button
				onClick={handleLogout}
				className="inline-flex items-center gap-2 px-3 py-1 text-sm bg-destructive/10 text-destructive rounded hover:bg-destructive/20 transition-colors"
			>
				<LogOut size={16} />
				Logout
			</button>
		</div>
	);
}
