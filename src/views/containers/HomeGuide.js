import {useRef} from "react"
import PhoneSvg from "../../media/svgs/PhoneSvg"
import Picture from "../components/Picture"
import mockups1 from "../../media/images/mockups-1.png"
import mockups1webp from "../../media/webp/mockups-1.webp"
import mockups2 from "../../media/images/mockups-2.png"
import mockups2webp from "../../media/webp/mockups-2.webp"
import mockups3 from "../../media/images/mockups-3.png"
import mockups3webp from "../../media/webp/mockups-3.webp"
import ScrollY from "../../helpers/ScrollY"
import GuideBgSvg from "../../media/svgs/GuideBgSvg"
import TriangleSvg from "../../media/svgs/TriangleSvg"

function HomeGuide()
{
    const contRef = useRef(null)
    let offsetTop
    if (contRef?.current && !offsetTop) offsetTop = contRef.current.offsetTop
    const headerHeight = +(process.env.REACT_APP_HEADER_HEIGHT.replace("px", ""))
    const scrollY = ScrollY()
    const margin = Math.min(Math.max(0, scrollY + headerHeight - offsetTop), 800)
    const guideLevel = margin > 600 ? 3 : margin > 400 ? 2 : margin > 200 ? 1 : 0

    return (
        <div className="home-guide" ref={contRef}>
            <GuideBgSvg className="home-guide-bg"/>
            <GuideBgSvg className="home-guide-bg-down"/>
            <TriangleSvg className="home-download-triangle"/>
            <div className="home-guide-inner" style={{position: margin > 0 && margin < 800 ? "fixed" : "static", top: headerHeight + "px", transform: margin > 0 && margin < 800 ? `none` : `translate3d(0,${margin}px,0)`}}>
                <div className="home-guide-title">چطور از بومینو استفاده کنم؟</div>
                <div className="home-guide-content">
                    <div className="home-guide-content-text">
                        <div className={`home-guide-item ${guideLevel === 3 ? "hide" : guideLevel === 0 ? "" : "disable"}`}>
                            <div className={`home-guide-item-title ${guideLevel === 0 ? "" : "disable"}`}>1. دانلود و نصب</div>
                            <div>ابتدا اپلیکیشن را دانلود<br/>و نصب کنید.</div>
                        </div>
                        <div className={`home-guide-item ${guideLevel === 1 ? "" : "disable"}`}>
                            <div className={`home-guide-item-title ${guideLevel === 1 ? "" : "disable"}`}>2. ساخت پروفایل</div>
                            <div>بعد ثبت‌نام، برای فرزند یا فرزندانتون<br/>پروفایل بسازید.</div>
                        </div>
                        <div className={`home-guide-item ${guideLevel === 2 ? "" : "disable"}`}>
                            <div className={`home-guide-item-title ${guideLevel === 2 ? "" : "disable"}`}>3. انتخاب دسترسی به اینترنت</div>
                            <div>سپس می‌تونید یکی از بسته‌های مناسب<br/>ردهٔ سنی فرزندتون رو انتخاب کنید.</div>
                        </div>
                        <div className={`home-guide-item ${guideLevel === 3 ? "" : "hide"}`}>
                            <div className={`home-guide-item-title ${guideLevel === 3 ? "" : "disable"}`}>4. بچه‌تونو بفرستید اینترنت</div>
                            <div>با خیال راحت گوشی رو به فرزندتون بدید. اینجا کلی<br/>ابزار و محتوای جذاب رو هم بهش معرفی می‌کنیم.</div>
                        </div>
                    </div>
                    <div className="home-guide-dot-cont">
                        <div className={`home-guide-dot ${guideLevel === 0 ? "" : "disable"}`}/>
                        <div className={`home-guide-dot ${guideLevel === 1 ? "" : "disable"}`}/>
                        <div className={`home-guide-dot ${guideLevel === 2 ? "" : "disable"}`}/>
                        <div className={`home-guide-dot ${guideLevel === 3 ? "" : "disable"}`}/>
                    </div>
                    <PhoneSvg className={`home-guide-img ${guideLevel === 0 ? "" : "disable"}`}/>
                    <Picture className={`home-guide-img img ${guideLevel === 1 ? "" : "disable"}`} src={mockups1} srcSet={mockups1webp} alt=""/>
                    <Picture className={`home-guide-img img ${guideLevel === 2 ? "" : "disable"}`} src={mockups2} srcSet={mockups2webp} alt=""/>
                    <Picture className={`home-guide-img img ${guideLevel === 3 ? "" : "disable"}`} src={mockups3} srcSet={mockups3webp} alt=""/>
                </div>
            </div>
        </div>
    )
}

export default HomeGuide