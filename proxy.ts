import { NextRequest, NextResponse } from 'next/server';

// Routes that don't require authentication
const publicRoutes = ['/login', '/api/auth/login'];

export async function proxy(request: NextRequest) {
	const pathname = request.nextUrl.pathname;

	// Allow public routes
	if (publicRoutes.includes(pathname)) {
		return NextResponse.next();
	}

	// Check for auth cookie
	const authCookie = request.cookies.get('auth_session');

	if (!authCookie) {
		// Redirect to login if not authenticated
		return NextResponse.redirect(new URL('/login', request.url));
	}

	return NextResponse.next();
}

export const config = {
	matcher: [
		// Apply middleware to all routes except static assets and API routes (except /api/auth/login)
		'/((?!_next|.*\\..*|api/auth/verify|api/auth/logout).*)',
	],
};
