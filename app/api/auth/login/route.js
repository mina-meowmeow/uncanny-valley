import { cookies } from 'next/headers';
import { createClient } from '@supabase/supabase-js';
import { sign } from 'jsonwebtoken';

export async function POST(request) {
	try {
		const { sessionId } = await request.json();
		console.log('trying to find sessionId:', sessionId);

		if (!sessionId || typeof sessionId !== 'string') {
			return Response.json(
				{ message: 'Session ID is required' },
				{ status: 400 },
			);
		}

		const supabaseClient = createClient(
			process.env.SUPABASE_URL,
			process.env.SUPABASE_API_KEY,
		);

		const { data, error } = await supabaseClient
			.from('user_sessions')
			.select()
			.eq('session_id', sessionId.trim());

		if (error) {
			console.log('error found in login', error);
			return Response.json(
				{ message: 'Session ID not found in database.' },
				{ status: 401 },
			);
		}

		if (data.length !== 1) {
			console.log('There is no session matching the session ID');
			return Response.json(
				{ message: 'Invalid session data.' },
				{ status: 401 },
			);
		}

		const payload = {
			aud: 'authenticated',
			role: 'authenticated',
			session_id: data[0].session_id,
			sub: data[0].session_id,
			view_type: data[0].view_type,
			presenter_type: data[0].presenter_type,
		};

		const token = sign(payload, process.env.SUPABASE_JWT_SECRET, {
			expiresIn: '24h',
		});

		const cookieStore = await cookies();
		cookieStore.set('auth_session', token, {
			httpOnly: true,
			secure: process.env.NODE_ENV === 'production',
			sameSite: 'lax',
			maxAge: 24 * 60 * 60, // 24 hours
			path: '/',
		});

		return Response.json(
			{
				message: 'Login successful',
				...payload,
			},
			{ status: 200 },
		);
	} catch (error) {
		console.error('Login error:', error);
		return Response.json(
			{ message: 'An error occurred during login' },
			{ status: 500 },
		);
	}
}
