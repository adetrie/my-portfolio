import '../styles/globals.css'
import '../i18n'
import {Router} from "next/router";
import StartProgressBar from "../components/screens/StartProgressBar";
import UnableToLoad from "../components/modals/UnableToLoad";
import {useEffect, useState} from "react";


function MyApp({Component, pageProps}) {

    const [data, setData] = useState([]);
    const [loadingAnimationCompleted, setLoadingAnimationCompleted] = useState(false);
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(false);

    let cumulatedProgress = 0

    useEffect(() => {
        if (progress <= 100) {
            fetchPortfolioApi()
            setTimeout(() => {
                fetchPortfolioApi2()
            }, 1000);
            fetchPortfolioApi3()
            setTimeout(() => {
                fetchPortfolioApi4()
            }, 1000);
        }
    }, [loadingAnimationCompleted])

    function onLoadingAnimationCompleted() {
        console.log("onLoadingAnimationCompleted")
        setLoadingAnimationCompleted(true);
    }

    async function fetchPortfolioApi() {
        fetch(process.env.PORTFOLIO_BACKEND_BASEURL + '/me')
            .then((response) => response.json())
            .then((response) => {
                setData(oldArray => [...oldArray, response.data]);
                cumulatedProgress += 25;
                setProgress(cumulatedProgress)
            })
            .catch(() => {
                setError(true);
            });
    };


    async function fetchPortfolioApi2() {
        fetch(process.env.PORTFOLIO_BACKEND_BASEURL + '/me')
            .then((response) => response.json())
            .then((response) => {
                setData(oldArray => [...oldArray, response.data]);
                cumulatedProgress += 25;
                setProgress(cumulatedProgress)
            })
            .catch(() => {
                setError(true);
            });
    };

    async function fetchPortfolioApi3() {
        fetch(process.env.PORTFOLIO_BACKEND_BASEURL + '/me')
            .then((response) => response.json())
            .then((response) => {
                setData(oldArray => [...oldArray, response.data]);
                cumulatedProgress += 25;
                setProgress(cumulatedProgress)
            })
            .catch(() => {
                setError(true);
            });
    };

    async function fetchPortfolioApi4() {
        fetch(process.env.PORTFOLIO_BACKEND_BASEURL + '/me')
            .then((response) => response.json())
            .then((response) => {
                setData(oldArray => [...oldArray, response.data]);
                cumulatedProgress += 25;
                setProgress(cumulatedProgress)
            })
            .catch(() => {
                setError(true);
            });
    };
    return (
        <>
            {/* Show progress bar while data is not loading */}
            {(data.length <= 4 || !loadingAnimationCompleted) &&
                <StartProgressBar progress={progress} finishCallback={onLoadingAnimationCompleted}/>}
            {/* Show portfolio */}
            {(loadingAnimationCompleted && !error) && <Component {...pageProps} />}
            {error && <UnableToLoad></UnableToLoad>}
        </>
    )
}

export default MyApp
