
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        global-layout

            { children }
      </body>
    </html>
  );
}
