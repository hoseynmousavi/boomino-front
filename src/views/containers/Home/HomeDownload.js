import AppBgSvg from "../../../media/svgs/AppBgSvg"
import PlayStoreSvg from "../../../media/svgs/PlayStoreSvg"
import AppStoreSvg from "../../../media/svgs/AppStoreSvg"
import Picture from "../../components/Picture"
import bazaar from "../../../media/images/bazaar.png"
import ScrollY from "../../../helpers/ScrollY"
import {useRef} from "react"
import MobileFrame from "../../../media/svgs/MobileFrame"
import intro1 from "../../../media/images/intro1.png"
import intro2 from "../../../media/images/intro2.png"
import intro3 from "../../../media/images/intro3.png"
import intro4 from "../../../media/images/intro4.png"

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
    const headerHeight = +(process.env.REACT_APP_HEADER_HEIGHT.replace("px", "")) - +(process.env.REACT_APP_HEADER_LOW_HEIGHT.replace("px", ""))
    const reduceScrollMargin = 300
    const defaultWidth = 200
    const widthMargin = 80
    const defaultHeight = 357
    const heightMargin = 135
    const top = window.innerHeight / 2 + headerHeight / 2 - phoneHeight.current / 2
    const maxMargin = guideTop.current - phoneTop.current - reduceScrollMargin
    const scrollY = ScrollY()
    const maxScrollImages = Math.min(Math.max(0, scrollY - guideTop.current - defaultHeight + heightMargin), 3 * (defaultHeight + heightMargin - 38))
    const margin = Math.min(Math.max(0, scrollY + top - phoneTop.current), maxMargin)
    const widthSource = (margin / ((maxMargin) / widthMargin))
    const heightSource = (margin / ((maxMargin) / heightMargin))
    const width = defaultWidth + widthSource + "px"
    const transform = `translate3d(
    calc((-100vw + 30vw + ${width} + 50px) * ${margin / (maxMargin)}),
    ${
        scrollY + window.innerHeight / 2 + headerHeight / 2 > guideTop.current + guideHeight.current ?
            guideTop.current + guideHeight.current - (scrollY + window.innerHeight / 2 + headerHeight / 2 + heightSource / 2)
            :
            -heightSource / 2
    }px,
    0
    )`
    const imgHeight = `calc(100% - 40px + ${heightSource}px)`
    const transformSlide = `translate3d(0,${-maxScrollImages}px,0)`
    return (
        <div className="home-download-app" style={{top}} ref={phoneRef}>
            <AppBgSvg className={`home-download-app-bg ${margin > 0 ? "hide" : ""}`}/>
            <div className="home-download-app-svg-cont" style={{transform, width}}>
                <MobileFrame className="home-download-app-svg"/>
                <div className="home-download-app-img" style={{height: imgHeight}}>
                    <div className="home-download-app-img-item-slide" style={{transform: transformSlide}}>
                        <img src={intro1} className="home-download-app-img-item" alt=""/>
                        <img src={intro2} className="home-download-app-img-item" alt=""/>
                        <img src={intro3} className="home-download-app-img-item" alt=""/>
                        <img src={intro4} className="home-download-app-img-item" alt=""/>
                    </div>
                </div>
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