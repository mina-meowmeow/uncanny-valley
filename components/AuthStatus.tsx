'use client';

import { useRouter } from 'next/navigation';
import { LogOut } from 'lucide-react';
import { useSession } from '@/lib/contexts/sessionsContext';

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

	if (loading) {
		return null;
	}

	return (
		<div className="flex items-center gap-4">
			<span className="text-sm text-muted-foreground">
				Session: <span className="font-mono text-xs">{session?.sessionId}</span>
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
