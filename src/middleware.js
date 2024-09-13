import { NextResponse } from 'next/server'
import handleLocale from '@/utils/middleware/locale'

// This function can be marked `async` if using `await` inside
export function middleware(request) {
    // console.log('pathname', request.nextUrl.pathname);

    // if (request.nextUrl.pathname.startsWith('/photo')) {
    //     console.log('middleware redirect');
    //     console.log(request.url);
    //     return NextResponse.rewrite(new URL('/photo/1', request.url))
    // }

    const localeStatus = handleLocale(request);
    if (localeStatus === 'locale redirect') {
        return NextResponse.redirect(request.nextUrl)
    }
}

export const config = {
    // 中间件运行的路径
    matcher: [
        // NEXT.js内部资源路径 /_next
        // e.g. /_next/static/chunks/webpack.js |  /_next/static/chunks/main-app.js |  /_next/static/chunks/app-pages-internals.js
        // 不匹配内部资源，内容资源不需要国际化
        '/((?!_next|favicon.ico).*)',
    ],
}