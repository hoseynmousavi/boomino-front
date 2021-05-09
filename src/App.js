import {useEffect} from "react"
import loadColors from "./helpers/loadColors"
import HomePage from "./views/pages/HomePage"
import Footer from "./views/containers/Footer"

function App()
{
    useEffect(() => process.env.NODE_ENV !== "production" && loadColors(), [])

    return (
        <>
            <HomePage/>
            <Footer/>
        </>
    )
}

export default App
