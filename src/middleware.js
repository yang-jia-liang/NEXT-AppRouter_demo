import { NextResponse } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request) {
    // console.log('pathname', request.nextUrl.pathname);

    if (request.nextUrl.pathname.startsWith('/photo')) {
        console.log('middleware redirect');
        console.log(request.url);
        return NextResponse.rewrite(new URL('/photo/1', request.url))
    }
}

// export const config = {
//     matcher: '/about/:path*',
// }