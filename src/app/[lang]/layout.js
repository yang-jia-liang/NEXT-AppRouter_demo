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
