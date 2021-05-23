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
import Resize from "../../../helpers/Resize"
import GuideBgSvg from "../../../media/svgs/GuideBgSvg"

function HomeDownload()
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
    if (
        guideRef && !guideTop.current &&
        firstRef.current && !firstTop.current &&
        secondRef.current && !secondTop.current &&
        thirdRef.current && !thirdTop.current &&
        forthRef.current && !forthTop.current
    )
    {
        guideTop.current = guideRef.offsetTop
        firstTop.current = firstRef.current.offsetTop
        secondTop.current = secondRef.current.offsetTop
        thirdTop.current = thirdRef.current.offsetTop
        forthTop.current = forthRef.current.offsetTop
    }
    const scrollY = ScrollY()
    const {clientWidth} = Resize()
    const headerHeight = +(process.env.REACT_APP_HEADER_HEIGHT.replace("px", "")) - +(process.env.REACT_APP_HEADER_LOW_HEIGHT.replace("px", ""))
    const guideLevel = scrollY + 250 - headerHeight / 2 <= firstTop?.current - (clientWidth > 480 ? 5000 : 350) ?
        -1
        :
        scrollY + 250 - headerHeight / 2 <= firstTop?.current ?
            0
            :
            scrollY + 250 - headerHeight / 2 <= secondTop?.current ?
                1
                :
                scrollY + 250 - headerHeight / 2 <= thirdTop?.current ?
                    2
                    :
                    scrollY + 250 - headerHeight / 2 <= forthTop?.current ?
                        3
                        :
                        4

    let guideHeight = useRef(null)
    let phoneTop = useRef(null)
    let phoneHeight = useRef(null)
    const phoneRef = useRef(null)
    if (guideRef && phoneRef.current && !phoneTop.current)
    {
        guideHeight.current = guideRef.scrollHeight
        phoneTop.current = phoneRef.current.offsetTop
        phoneHeight.current = phoneRef.current.scrollHeight
    }
    const reduceScrollMargin = 300
    const defaultWidth = 200
    const widthMargin = clientWidth > 1000 ? 80 : 0
    const defaultHeight = defaultWidth / 0.56 // aspect-ratio
    const heightMargin = widthMargin / 0.56 // aspect-ratio
    const top = window.innerHeight / 2 + headerHeight / 2 - phoneHeight.current / 2
    const maxMargin = guideTop.current - phoneTop.current - reduceScrollMargin
    const margin = Math.min(Math.max(0, scrollY + top - phoneTop.current), maxMargin)
    const widthSource = (margin / (maxMargin / widthMargin))
    const heightSource = (margin / (maxMargin / heightMargin))
    const width = defaultWidth + widthSource + "px"
    const padding = clientWidth > 1000 ? process.env.REACT_APP_DESKTOP_GRID_PADDING.replace("%", "vw") : process.env.REACT_APP_TABLET_GRID_PADDING.replace("%", "vw")
    const transform = `translate3d(
    calc((-100vw + 2 * (${padding}) + ${width} + 50px) * ${margin / (maxMargin)}),
    ${
        scrollY + window.innerHeight / 2 + headerHeight / 2 >= guideTop.current + guideHeight.current ?
            guideTop.current + guideHeight.current - (scrollY + window.innerHeight / 2 + headerHeight / 2 + heightSource / 2)
            :
            -heightSource / 2
    }px,
    0
    )`
    const imgHeight = `calc(100% - 50px + ${heightSource}px)`
    const paddingFrame = clientWidth > 480 ? 50 : 30
    const transformSlide = `translate3d(0,-${guideLevel === 0 ? 0 : guideLevel === 1 ? defaultHeight + heightMargin - paddingFrame : guideLevel === 2 ? 2 * (defaultHeight + heightMargin - paddingFrame) : 3 * (defaultHeight + heightMargin - paddingFrame)}px,0)`
    const imagesScroll = Math.max(0, Math.min(scrollY + 400 - headerHeight / 2 - firstTop?.current, 3 * (defaultHeight + heightMargin - paddingFrame)))
    const transformSlideMobile = `translate3d(0,-${imagesScroll}px,0)`
    return (
        <>
            <div className="home-download-app" style={{top}} ref={phoneRef}>
                <AppBgSvg className={`home-download-app-bg ${margin > 0 ? "hide" : ""}`}/>
                <div className="home-download-app-svg-cont" style={{transform, width, minWidth: width}}>
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

            <GuideBgSvg className="home-guide-bg"/>
            <div className="home-guide" id="home-guide">
                <div className={`home-guide-title ${guideLevel === 4 ? "hide" : ""}`}>چطور از بومینو استفاده کنم؟</div>
                <div className="home-guide-content">
                    <div className={`home-guide-content-text ${guideLevel === 4 ? "hide-height" : ""}`}>
                        <div className={`home-guide-item first ${guideLevel === 0 ? "" : "disable"}`} ref={firstRef}>
                            <div className={`home-guide-item-title ${guideLevel === 0 ? "" : "disable"}`}>۱. دانلود و نصب</div>
                            <div>ابتدا اپلیکیشن را دانلود<br/>و نصب کنید.</div>
                        </div>
                        <div className={`home-guide-item second ${guideLevel === 1 ? "" : "disable"}`} ref={secondRef}>
                            <div className={`home-guide-item-title ${guideLevel === 1 ? "" : "disable"}`}>۲. ساخت پروفایل</div>
                            <div>بعد ثبت‌نام، برای فرزند یا فرزندانتون<br/>پروفایل بسازید.</div>
                        </div>
                        <div className={`home-guide-item third ${guideLevel === 2 ? "" : "disable"}`} ref={thirdRef}>
                            <div className={`home-guide-item-title ${guideLevel === 2 ? "" : "disable"}`}>۳. انتخاب دسترسی به اینترنت</div>
                            <div>سپس می‌تونید یکی از بسته‌های مناسب<br/>ردهٔ سنی فرزندتون رو انتخاب کنید.</div>
                        </div>
                        <div className={`home-guide-item last ${guideLevel === 3 ? "" : "disable"}`} ref={forthRef}>
                            <div className={`home-guide-item-title ${guideLevel === 3 ? "" : "disable"}`}>۴. بچه‌تونو بفرستید اینترنت</div>
                            <div>با خیال راحت گوشی رو به فرزندتون بدید. اینجا کلی<br className="title-none"/>ابزار و محتوای جذاب رو هم بهش معرفی می‌کنیم.</div>
                        </div>
                    </div>
                    <div className={`home-guide-dot-cont ${guideLevel === 4 || scrollY - headerHeight - guideTop.current < -100 ? "hide" : ""}`}>
                        <div className={`home-guide-dot ${guideLevel === 0 ? "" : "disable"}`}/>
                        <div className={`home-guide-dot ${guideLevel === 1 ? "" : "disable"}`}/>
                        <div className={`home-guide-dot ${guideLevel === 2 ? "" : "disable"}`}/>
                        <div className={`home-guide-dot ${guideLevel === 3 ? "" : "disable"}`}/>
                    </div>
                    <div className="home-guide-img">
                        <MobileFrame className="home-download-app-svg"/>
                        <div className="home-download-app-img">
                            <div className="home-download-app-img-item-slide" style={{transform: transformSlideMobile}}>
                                <img src={intro1} className="home-download-app-img-item" alt=""/>
                                <img src={intro2} className="home-download-app-img-item" alt=""/>
                                <img src={intro3} className="home-download-app-img-item" alt=""/>
                                <img src={intro4} className="home-download-app-img-item" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <GuideBgSvg className="home-guide-bg bottom"/>
        </>
    )
}

export default HomeDownload