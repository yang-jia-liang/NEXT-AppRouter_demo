// 定义 params.lang 的有效值，有效值外，访问不到资源，显示404页面
export const dynamicParams = false
export async function generateStaticParams() {
    return [{ lang: 'zh_CN' }, { lang: 'en_US' }, { lang: 'ja_JP' },]
}


export default function RootLayout({ children, params }) {
  return (
    <html lang={params.lang}>
      <body>
        global-layout

            { children }
      </body>
    </html>
  );
}
