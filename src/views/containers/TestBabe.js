import {useEffect, useState} from "react"

function TestBabe()
{
    const [guideLevel, setGuideLevel] = useState(0)

    useEffect(() =>
    {
        function onwheel()
        {
            setGuideLevel(guideLevel + 1)
            console.log(guideLevel)
        }

        document.addEventListener("scroll", onwheel)
    }, [])

    return (
        <div className="home-guide">
            {guideLevel}
        </div>
    )
}

export default TestBabe
