import {useEffect} from "react"
import loadColors from "./helpers/loadColors"
import HomePage from "./views/pages/HomePage"
import Footer from "./views/containers/Footer"
import Header from "./views/containers/Header"

function App()
{
    // env variables will be replace in html file, in build process, so we need em in development
    useEffect(() => process.env.NODE_ENV === "development" && loadColors(), [])

    return (
        <>
            <Header/>
            <HomePage/>
            <Footer/>
        </>
    )
}

export default App