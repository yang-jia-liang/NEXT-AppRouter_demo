import {NextUIProvider} from "@nextui-org/react";
import './global.css'

export default function RootLayout({ children, params }) {
  return (
    <html lang={params.lang}>
      <body className="h-screen">
      <NextUIProvider>
          global-layout

          { children }
      </NextUIProvider>
      </body>
    </html>
  );
}
