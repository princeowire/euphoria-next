import { NextResponse } from 'next/server';
import { verifyIdToken } from './src/lib/firebase/firebaseAdmin'; // Helper to verify tokens (explained later)

export async function middleware(req) {
  const { pathname } = req.nextUrl;

  // Allow access to login and public files (e.g., images, API routes)
  if (pathname === '/login' || pathname.startsWith('/_next') || pathname.startsWith('/api')) {
    return NextResponse.next();
  }

  // Get the auth token from cookies
  const token = req.cookies.get('authToken');

  try {
    // Verify the token
    if (token) {
      await verifyIdToken(token);
      return NextResponse.next(); // User is authenticated
    }
  } catch (error) {
    console.error('Token verification failed:', error);
  }

  // Redirect to login page if not authenticated
  const loginUrl = new URL('/login', req.url);
  return NextResponse.redirect(loginUrl);
}

export const config = {
  matcher: ['/', '/shop/:path*'], // Specify paths for middleware to run
};
