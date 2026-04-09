import { createClient } from '@supabase/supabase-js';
import { cookies } from 'next/headers';
import { verify } from 'jsonwebtoken';

export async function POST(request) {
	try {
		const cookieStore = await cookies();
		const token = cookieStore.get('auth_session')?.value;

		if (!token) {
			return Response.json(
				{ message: 'No valid session found' },
				{ status: 401 },
			);
		}

		let decodedPayload;
		try {
			decodedPayload = verify(token, process.env.SUPABASE_JWT_SECRET);
		} catch (err) {
			console.error('Invalid token during logging:', err);
			return Response.json(
				{ message: 'Invalid session token' },
				{ status: 401 },
			);
		}

		const supabase = createClient(
			process.env.SUPABASE_URL,
			process.env.SUPABASE_API_KEY,
			{
				global: {
					headers: {
						Authorization: token ? `Bearer ${token}` : '',
					},
				},
			},
		);

		const body = await request.json();
		const { error, status } = await supabase.from('raw_logs').insert([
			{
				session_id: decodedPayload.sub,
				payload: {
					...body,
					view_type: decodedPayload.view_type,
					presenter_type: decodedPayload.presenter_type,
				},
			},
		]);

		if (error) {
			console.error('Error encountered while logging event:', error);
			return Response.json({ message: 'Failed to log event' }, { status: 500 });
		}
		return Response.json({ status: 'ok' }, { status: 200 });
	} catch (error) {
		console.error('Log error:', error);
		return Response.json({ message: 'Logging failed' }, { status: 500 });
	}
}
