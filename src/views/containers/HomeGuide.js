import {useState} from "react"
import GuideBgSvg from "../../media/svgs/GuideBgSvg"
import TriangleSvg from "../../media/svgs/TriangleSvg"
import PhoneSvg from "../../media/svgs/PhoneSvg"

function HomeGuide()
{
    const [guideLevel] = useState(0)
    return (
        <div className="home-guide">
            <GuideBgSvg className="home-guide-bg"/>
            <GuideBgSvg className="home-guide-bg-down"/>
            <TriangleSvg className="home-download-triangle"/>
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
                    <div className="home-guide-dot"/>
                    <div className="home-guide-dot disable"/>
                    <div className="home-guide-dot disable"/>
                    <div className="home-guide-dot disable"/>
                </div>
                <PhoneSvg className="home-guide-img"/>
            </div>
        </div>
    )
}

export default HomeGuide