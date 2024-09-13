export const metadata = {
    title: 'login-layout',
}

export default function LoginLayout({
                                            children, // will be a page or nested layout
                                        }) {
    return (
        <section>
            login-layout

            {children}
        </section>
    )
}