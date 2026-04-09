import type React from 'react';
import './globals.css';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import Providers from './providers';
import { cookies } from 'next/headers';
import { verify } from 'jsonwebtoken';
import { SessionData } from '@/lib/contexts/sessionsContext';

const _geist = Geist({ subsets: ['latin'] });
const _geistMono = Geist_Mono({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Livestream Shopping Experiment',
	description:
		'E-commerce prototype with livestream shopping experience for trust and uncanny valley research',
	generator: 'v0.app',
	icons: {
		icon: [
			{
				url: '/icon-light-32x32.png',
				media: '(prefers-color-scheme: light)',
			},
			{
				url: '/icon-dark-32x32.png',
				media: '(prefers-color-scheme: dark)',
			},
			{
				url: '/icon.svg',
				type: 'image/svg+xml',
			},
		],
		apple: '/apple-icon.png',
	},
};

export const viewport = {
	themeColor: '#000000',
};

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const cookieStore = await cookies();
	const token = cookieStore.get('auth_session')?.value;

	let initialSession: SessionData = null;

	if (token) {
		try {
			const decoded = verify(token, process.env.SUPABASE_JWT_SECRET!) as any;
			initialSession = decoded;
		} catch (error) {
			console.error('Invalid or expired JWT:', error);
		}
	}

	return (
		<html lang="en">
			<body className={`font-sans antialiased`}>
				<Providers initialSession={initialSession}>{children}</Providers>
			</body>
		</html>
	);
}
