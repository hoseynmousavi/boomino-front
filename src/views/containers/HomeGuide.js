import {useState} from "react"
import PhoneSvg from "../../media/svgs/PhoneSvg"
import Picture from "../components/Picture"
import mockups1 from "../../media/images/mockups-1.png"
import mockups1webp from "../../media/webp/mockups-1.webp"
import mockups2 from "../../media/images/mockups-2.png"
import mockups2webp from "../../media/webp/mockups-2.webp"
import mockups3 from "../../media/images/mockups-3.png"
import mockups3webp from "../../media/webp/mockups-3.webp"

function HomeGuide()
{
    const [guideLevel] = useState(0)
    return (
        <div className="home-guide">
            {/*<GuideBgSvg className="home-guide-bg"/>*/}
            {/*<GuideBgSvg className="home-guide-bg-down"/>*/}
            {/*<TriangleSvg className="home-download-triangle"/>*/}
            <div className="home-guide-inner">
                <div className="home-guide-title">چطور از بومینو استفاده کنم؟</div>
                <div className="home-guide-content">
                    <div className="home-guide-content-text">
                        <div className={`home-guide-item ${guideLevel === 0 ? "" : "disable"}`}>
                            <div className={`home-guide-item-title ${guideLevel === 0 ? "" : "disable"}`}>1. دانلود</div>
                            <div>ابتدا اپلیکیشن را دانلود<br/>و نصب کنید.</div>
                        </div>
                        <div className={`home-guide-item ${guideLevel === 1 ? "" : "disable"}`}>
                            <div className={`home-guide-item-title ${guideLevel === 1 ? "" : "disable"}`}>2. ساخت اکانت</div>
                            <div>ثبت‌نام کنید و فرزند یا<br/>فرزندانتان را تعریف کنید.</div>
                        </div>
                        <div className={`home-guide-item ${guideLevel === 2 ? "" : "disable"}`}>
                            <div className={`home-guide-item-title ${guideLevel === 2 ? "" : "disable"}`}>3. فعال‌کردن اینترنت کودک</div>
                            <div>اینترنت را فعال کنید و<br/>با خیال آسوده<br/>به فرزندتان بسپارید.</div>
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