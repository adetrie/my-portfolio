import '../styles/globals.css'
import {NextUIProvider} from "@nextui-org/react";
import '../i18n'

function MyApp({Component, pageProps}) {
    console.log("Backend url: ${process.env.PORTFOLIO_BACKEND_BASEURL}")

    return (
        <NextUIProvider>
            <Component {...pageProps} />
        </NextUIProvider>
    )
}

export default MyApp
