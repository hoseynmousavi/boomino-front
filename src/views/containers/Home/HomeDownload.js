import AppBgSvg from "../../../media/svgs/AppBgSvg"
import PhoneSvg from "../../../media/svgs/PhoneSvg"
import PlayStoreSvg from "../../../media/svgs/PlayStoreSvg"
import AppStoreSvg from "../../../media/svgs/AppStoreSvg"
import Picture from "../../components/Picture"
import bazaar from "../../../media/images/bazaar.png"
import ScrollY from "../../../helpers/ScrollY"
import {useRef} from "react"

function HomeDownload()
{
    let guideTop = useRef(null)
    let guideHeight = useRef(null)
    let phoneTop = useRef(null)
    let phoneHeight = useRef(null)
    const guideRef = document.getElementById("home-guide")
    const phoneRef = useRef(null)
    if (guideRef && phoneRef.current && !guideTop.current && !phoneTop.current)
    {
        guideTop.current = guideRef.offsetTop
        guideHeight.current = guideRef.scrollHeight
        phoneTop.current = phoneRef.current.offsetTop
        phoneHeight.current = phoneRef.current.scrollHeight
    }
    const scrollY = ScrollY()
    const headerHeight = +(process.env.REACT_APP_HEADER_HEIGHT.replace("px", "")) - +(process.env.REACT_APP_HEADER_LOW_HEIGHT.replace("px", ""))
    const margin = Math.min(Math.max(0, scrollY + window.innerHeight / 2 - headerHeight - phoneTop.current - 50), guideTop.current - phoneTop.current)
    const transform = `translate3d(
    calc((-100vw + 30vw + 200px + 50px) * ${margin / (guideTop.current - phoneTop.current)}),
    ${
        scrollY + window.innerHeight / 2 - headerHeight > guideTop.current + guideHeight.current - phoneHeight.current / 2 ?
            guideTop.current + guideHeight.current - phoneHeight.current / 2 - (scrollY + window.innerHeight / 2 - headerHeight)
            :
            0
    }px,
    0
    )`
    return (
        <div className="home-download-app" ref={phoneRef}>
            <AppBgSvg className={`home-download-app-bg ${margin > 0 ? "hide" : ""}`}/>
            <div className="home-download-app-svg-cont" style={{transform}}>
                <PhoneSvg className="home-download-app-svg"/>
            </div>
            <div className={`home-download-app-content ${margin > 0 ? "hide" : ""}`}>
                <div className="home-download-app-title">همین حالا اپلیکیشن بومینو رو نصب کنید</div>
                <div className="home-download-app-desc">استفاده از بومینو کاملا رایگانه</div>
                <div className="home-download-app-store">
                    <PlayStoreSvg className="home-download-app-store-svg"/>
                    <AppStoreSvg className="home-download-app-store-svg"/>
                    <Picture className="home-download-app-store-svg last-child" src={bazaar} alt="" srcSet={null}/>
                </div>
            </div>
        </div>
    )
}

export default HomeDownload