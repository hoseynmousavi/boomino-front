import {useEffect} from "react"
import loadColors from "./helpers/loadColors"
import HomePage from "./views/pages/HomePage"
import Footer from "./views/containers/Footer"
import Header from "./views/containers/Header"

function App()
{
    useEffect(() => process.env.NODE_ENV !== "production" && loadColors(), [])

    return (
        <>
            <Header/>
            <HomePage/>
            <Footer/>
        </>
    )
}

export default App
