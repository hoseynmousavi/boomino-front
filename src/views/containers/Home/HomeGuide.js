import mockups1 from "../../../media/images/mockups-1.png"
import mockups1webp from "../../../media/webp/mockups-1.webp"
import mockups2 from "../../../media/images/mockups-2.png"
import mockups2webp from "../../../media/webp/mockups-2.webp"
import mockups3 from "../../../media/images/mockups-3.png"
import mockups3webp from "../../../media/webp/mockups-3.webp"
import GuideBgSvg from "../../../media/svgs/GuideBgSvg"
import Picture from "../../components/Picture"
import PhoneSvg from "../../../media/svgs/PhoneSvg"
import {useRef} from "react"
import ScrollY from "../../../helpers/ScrollY"

function HomeGuide()
{
    let guideTop = useRef(null)
    const guideRef = document.getElementById("home-guide")

    const firstRef = useRef(null)
    const secondRef = useRef(null)
    const thirdRef = useRef(null)
    const forthRef = useRef(null)
    const firstTop = useRef(null)
    const secondTop = useRef(null)
    const thirdTop = useRef(null)
    const forthTop = useRef(null)
    if (guideRef && firstRef?.current && secondRef?.current && thirdRef?.current && forthRef?.current)
    {
        guideTop.current = guideRef.offsetTop
        firstTop.current = firstRef.current.offsetTop
        secondTop.current = secondRef.current.offsetTop
        thirdTop.current = thirdRef.current.offsetTop
        forthTop.current = forthRef.current.offsetTop
    }
    const scrollY = ScrollY()
    const headerHeight = +(process.env.REACT_APP_HEADER_HEIGHT.replace("px", "")) - +(process.env.REACT_APP_HEADER_LOW_HEIGHT.replace("px", ""))
    const guideLevel = scrollY + window.innerHeight / 2 - headerHeight <= firstTop?.current ?
        0
        :
        scrollY + window.innerHeight / 2 - headerHeight <= secondTop?.current ?
            1
            :
            scrollY + window.innerHeight / 2 - headerHeight <= thirdTop?.current ?
                2
                :
                scrollY + window.innerHeight / 2 - headerHeight <= forthTop?.current + 100 ?
                    3
                    :
                    -1
    return (
        <>
            <GuideBgSvg className="home-guide-bg"/>
            <div className="home-guide" id="home-guide">
                <div className="home-guide-title">چطور از بومینو استفاده کنم؟</div>
                <div className="home-guide-content">
                    <div className="home-guide-content-text">
                        <div className={`home-guide-item ${guideLevel === 0 ? "" : "disable"}`} ref={firstRef}>
                            <div className={`home-guide-item-title ${guideLevel === 0 ? "" : "disable"}`}>1. دانلود و نصب</div>
                            <div>ابتدا اپلیکیشن را دانلود<br/>و نصب کنید.</div>
                        </div>
                        <div className={`home-guide-item ${guideLevel === 1 ? "" : "disable"}`} ref={secondRef}>
                            <div className={`home-guide-item-title ${guideLevel === 1 ? "" : "disable"}`}>2. ساخت پروفایل</div>
                            <div>بعد ثبت‌نام، برای فرزند یا فرزندانتون<br/>پروفایل بسازید.</div>
                        </div>
                        <div className={`home-guide-item ${guideLevel === 2 ? "" : "disable"}`} ref={thirdRef}>
                            <div className={`home-guide-item-title ${guideLevel === 2 ? "" : "disable"}`}>3. انتخاب دسترسی به اینترنت</div>
                            <div>سپس می‌تونید یکی از بسته‌های مناسب<br/>ردهٔ سنی فرزندتون رو انتخاب کنید.</div>
                        </div>
                        <div className={`home-guide-item ${guideLevel === 3 ? "" : "disable"}`} ref={forthRef}>
                            <div className={`home-guide-item-title ${guideLevel === 3 ? "" : "disable"}`}>4. بچه‌تونو بفرستید اینترنت</div>
                            <div>با خیال راحت گوشی رو به فرزندتون بدید. اینجا کلی<br/>ابزار و محتوای جذاب رو هم بهش معرفی می‌کنیم.</div>
                        </div>
                    </div>
                    <div className={`home-guide-dot-cont ${guideLevel === -1 || scrollY - headerHeight - guideTop.current < -100 ? "hide" : ""}`}>
                        <div className={`home-guide-dot ${guideLevel === 0 ? "" : "disable"}`}/>
                        <div className={`home-guide-dot ${guideLevel === 1 ? "" : "disable"}`}/>
                        <div className={`home-guide-dot ${guideLevel === 2 ? "" : "disable"}`}/>
                        <div className={`home-guide-dot ${guideLevel === 3 ? "" : "disable"}`}/>
                    </div>
                    <PhoneSvg className={`home-guide-img ${guideLevel === 0 ? "" : "disable"}`}/>
                </div>
            </div>
            <GuideBgSvg className="home-guide-bg bottom"/>
        </>
    )
}

export default HomeGuide