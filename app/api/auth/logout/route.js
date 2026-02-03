import { cookies } from 'next/headers';

export async function POST() {
	try {
		const cookieStore = await cookies();
		cookieStore.delete('auth_session');

		return Response.json({ message: 'Logout successful' }, { status: 200 });
	} catch (error) {
		console.error('Logout error:', error);
		return Response.json(
			{ message: 'An error occurred during logout' },
			{ status: 500 },
		);
	}
}
