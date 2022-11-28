import '../styles/globals.css'
import '../i18n'

function MyApp({Component, pageProps}) {
    console.log("Backend url: ${process.env.PORTFOLIO_BACKEND_BASEURL}")

    return (
        <Component {...pageProps} />
    )
}

export default MyApp
