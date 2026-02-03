'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
	const [sessionId, setSessionId] = useState('');
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState('');
	const router = useRouter();

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setError('');
		setLoading(true);

		try {
			const response = await fetch('/api/auth/login', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ sessionId }),
			});

			if (!response.ok) {
				const data = await response.json();
				setError(data.message || 'Invalid session ID');
				setLoading(false);
				return;
			}

			// Redirect to home on success
			router.push('/');
		} catch (err) {
			setError('An error occurred. Please try again.');
			setLoading(false);
		}
	};

	return (
		<div className="min-h-screen flex items-center justify-center bg-background">
			<div className="w-full max-w-md p-8 bg-card rounded-lg shadow-lg border border-border">
				<h1 className="text-2xl font-bold mb-6 text-center">Session Login</h1>

				<form onSubmit={handleSubmit} className="space-y-4">
					<div>
						<label
							htmlFor="sessionId"
							className="block text-sm font-medium mb-2"
						>
							Session ID
						</label>
						<input
							id="sessionId"
							type="text"
							value={sessionId}
							onChange={(e) => setSessionId(e.target.value)}
							placeholder="Enter your session ID"
							className="w-full px-4 py-2 border border-border rounded-md bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
							required
							disabled={loading}
						/>
					</div>

					{error && (
						<div className="p-3 bg-destructive/10 text-destructive text-sm rounded-md">
							{error}
						</div>
					)}

					<button
						type="submit"
						disabled={loading || !sessionId.trim()}
						className="w-full px-4 py-2 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
					>
						{loading ? 'Verifying...' : 'Login'}
					</button>
				</form>
			</div>
		</div>
	);
}
