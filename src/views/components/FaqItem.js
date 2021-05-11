import {useState, useRef} from "react"
import PlusSvg from "../../media/svgs/PlusSvg"
import Material from "./Material"

function FaqItem(props)
{
    const {title, answer} = props
    const answerCont = useRef(null)
    const [height, setHeight] = useState("0")

    const toggleAnswer = () =>
    {
        if (height === "0") setHeight(answerCont.current.scrollHeight + "px")
        else setHeight("0")
    }
    return (
        <div className="home-questions-item-cont">
            <Material className={`home-questions-item ${height !== "0" ? "open" : ""}`} onClick={toggleAnswer}>
                <div>{title}</div>
                <PlusSvg className={`home-questions-item-svg ${height !== "0" ? "open" : ""}`}/>
            </Material>
            <div ref={answerCont} className="home-questions-answer" style={{height}}>
                <div className="home-questions-answer-text">{answer}</div>
            </div>
        </div>
    )
}

export default FaqItem
