import { cookies } from 'next/headers';
import { createClient } from '@supabase/supabase-js';

export async function GET() {
	try {
		const cookieStore = await cookies();
		const sessionId = cookieStore.get('auth_session')?.value;

		if (!sessionId) {
			return Response.json({ message: 'No session ID found' }, { status: 401 });
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
			console.log('error handled at /verify', error);
			return Response.json(
				{
					message: 'Session ID not found in the database.',
				},
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

		return Response.json(
			{
				sessionId,
				userData: data[0].user_data,
			},
			{ status: 200 },
		);
	} catch (error) {
		console.error('Verify error:', error);
		return Response.json({ message: 'Verification failed' }, { status: 401 });
	}
}
