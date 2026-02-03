'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { LogOut } from 'lucide-react';

export default function AuthStatus() {
	const [sessionId, setSessionId] = useState<string | null>(null);
	const [loading, setLoading] = useState(true);
	const router = useRouter();

	useEffect(() => {
		const verifyAuth = async () => {
			try {
				const response = await fetch('/api/auth/verify');
				if (response.ok) {
					const data = await response.json();
					setSessionId(data.sessionId);
				}
			} catch (error) {
				console.error('Auth verification failed:', error);
			} finally {
				setLoading(false);
			}
		};

		verifyAuth();
	}, []);

	const handleLogout = async () => {
		try {
			await fetch('/api/auth/logout', { method: 'POST' });
			router.push('/login');
		} catch (error) {
			console.error('Logout failed:', error);
		}
	};

	if (loading) {
		return null;
	}

	if (!sessionId) {
		return null;
	}

	return (
		<div className="flex items-center gap-4">
			<span className="text-sm text-muted-foreground">
				Session: <span className="font-mono text-xs">{sessionId}</span>
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
