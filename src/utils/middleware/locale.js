// 处理国际化
export default function handleLocale(request) {
    const locales = ['zh_CN', 'en_US', 'ja_JP']
    const { pathname } = request.nextUrl
    const pathnameHasLocale = locales.some(locale => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`)

    // 正确进入到匹配语言的目录，不做处理
    if (pathnameHasLocale) {
        return 'locale matched'
    }
    // 没有进入到匹配的语言目录，设置默认语言，重定向到对应的语言目录
    else {
        const locale = locales[0]
        request.nextUrl.pathname = `/${locale}${pathname}`
        return 'locale redirect'
    }
}