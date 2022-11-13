import '../styles/globals.css'
import {NextUIProvider} from "@nextui-org/react";

function MyApp({Component, pageProps}) {
    console.log("Backend url: ${process.env.PORTFOLIO_BACKEND_BASEURL}")

    return (
        <NextUIProvider>
            <Component {...pageProps} />
        </NextUIProvider>
    )
}

export default MyApp
