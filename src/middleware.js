import { NextResponse } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request) {
    if (request.nextUrl.pathname.startsWith('/photo')) {
        return NextResponse.rewrite(new URL('/photo/1', request.url))
    }
}

// export const config = {
//     matcher: '/about/:path*',
// }