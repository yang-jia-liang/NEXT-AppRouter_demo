import { NextResponse } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request) {
    // console.log('pathname', request.nextUrl.pathname);

    // if (request.nextUrl.pathname.startsWith('/photo')) {
    //     console.log('middleware redirect');
    //     console.log(request.url);
    //     return NextResponse.rewrite(new URL('/photo/1', request.url))
    // }

    handleLocale(request)
}

// 处理国际化
const handleLocale = (request) => {
    const locales = ['zh_CN', 'en_US', 'ja_JP']
    const { pathname } = request.nextUrl
    const pathnameHasLocale = locales.some(locale => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`)

    // 正确进入到匹配语言的目录，不做处理
    if (pathnameHasLocale) {
        console.log(`locale match：${pathname}`);
    }
    // 没有进入到匹配的语言目录，设置默认语言，重定向到对应的语言目录
    else {
        const locale = locales[0]
        request.nextUrl.pathname = `/${locale}${pathname}`

        console.log(request.nextUrl.href);
        const changedUrl = new URL(request.nextUrl.href)
        console.log(changedUrl);

        console.log(new URL("http://localhost:3004/zh_CN/login"));

        return NextResponse.redirect(new URL(request.nextUrl.href))
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