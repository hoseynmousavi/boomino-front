import {useState, useEffect} from "react"

function Resize()
{
    const [clientWidth, setClientWidth] = useState(null)
    const [clientHeight, setClientHeight] = useState(null)

    useEffect(() =>
    {
        setClientWidth(document.body.clientWidth)
        setClientHeight(document.body.clientHeight)

        function onResize()
        {
            setClientWidth(document.body.clientWidth)
            setClientHeight(document.body.clientHeight)
        }

        window.addEventListener("resize", onResize, {passive: true})
        return () => window.removeEventListener("resize", onResize)
    }, [])

    return ({clientWidth, clientHeight})
}

export default Resize