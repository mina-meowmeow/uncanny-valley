import { NextRequest, NextResponse } from 'next/server';
import { jwtVerify } from 'jose';

const publicRoutes = ['/login', '/api/auth/login'];

export async function proxy(request: NextRequest) {
	const token = request.cookies.get('auth_session')?.value;
	const pathname = request.nextUrl.pathname;

	if (!token) {
		if (publicRoutes.includes(pathname)) {
			return NextResponse.next();
		}
		return NextResponse.redirect(new URL('/login', request.url));
	}

	// 2. If there IS a token, try to verify it
	try {
		const secret = new TextEncoder().encode(process.env.SUPABASE_JWT_SECRET);
		await jwtVerify(token, secret);

		if (publicRoutes.includes(pathname)) {
			return NextResponse.redirect(new URL('/', request.url));
		}

		// Otherwise, let them view the protected route
		return NextResponse.next();
	} catch (error) {
		console.log('Middleware JWT Verification failed:', error);

		if (publicRoutes.includes(pathname)) {
			const response = NextResponse.next();
			response.cookies.delete('auth_session');
			return response;
		}

		const response = NextResponse.redirect(new URL('/login', request.url));
		response.cookies.delete('auth_session');
		return response;
	}
}

export const config = {
	matcher: [
		// Apply middleware to all routes except static assets and API routes (except /api/auth/login)
		'/((?!_next|.*\\..*|api/auth/verify|api/auth/logout).*)',
	],
};
