import firstDesign from "../../media/images/1stIllustration.png"
import secondDesign from "../../media/images/2ndIllustration.png"
import thirdDesign from "../../media/images/3rdIllustration.png"
import forthDesign from "../../media/images/4thIllustration.png"
import bazaar from "../../media/images/bazaar.png"
import Material from "../components/Material"
import HamrahSvg from "../../media/svgs/HamrahSvg"
import CheckSvg from "../../media/svgs/CheckSvg"
import PhoneSvg from "../../media/svgs/PhoneSvg"
import PlayStoreSvg from "../../media/svgs/PlayStoreSvg"
import AppStoreSvg from "../../media/svgs/AppStoreSvg"
import Picture from "../components/Picture"
import AppBgSvg from "../../media/svgs/AppBgSvg"
import LogoTypeSvg from "../../media/svgs/LogoTypeSvg"
import FaqItem from "../components/FaqItem"
import WindSvg from "../../media/svgs/WindSvg"
import LandingDotsSvg from "../../media/svgs/LandingDotsSvg"
import CircleSvg from "../../media/svgs/CircleSvg"
import LandingCurveSvg from "../../media/svgs/LandingCurveSvg"
import LandingCurve2Svg from "../../media/svgs/LandingCurve2Svg"
import LandingDots2Svg from "../../media/svgs/LandingDots2Svg"
import PolygonSvg from "../../media/svgs/PolygonSvg"
import Header from "../containers/Header"
import HomeGuide from "../containers/HomeGuide"

function HomePage()
{
    return (
        <div className="home">
            <div className="home-first-section">
                <div className="home-header-cont">
                    <Header zIndex="calc(var(--header-z-index) + 1)" backgroundColor="var(--second-background-color)" disableShadow/>
                </div>
                <WindSvg className="home-first-wind first"/>
                <LandingDotsSvg className="home-first-dots"/>
                <div className="home-first-right">
                    <LogoTypeSvg className="home-first-logo-type"/>
                    <div className="home-first-title">از اینجا بچه‌تونو بفرستید اینترنت!</div>
                    <div className="home-first-desc">
                        بومینو دسترسی بچه‌ها رو به اینترنت
                        متناسب با ردهٔ سنی اون‌ها محدود می‌کنه
                        و با کلّی محتوای مناسب و جذّاب سرگرمشون می‌کنه
                    </div>
                    <div className="home-first-desktop-section">
                        <a href={process.env.REACT_APP_APK_LINK} download>
                            <Material className="home-first-download">فعال‌سازی</Material>
                        </a>
                        <div className="home-first-support">
                            <HamrahSvg className="home-first-support-svg"/>
                            <div>قدرت‌گرفته از همراه اول</div>
                        </div>
                    </div>
                </div>
                <img className="home-first-first-design" src={firstDesign} alt=""/>
                <div className="home-first-mobile-section">
                    <a className="home-first-download-cont mobile" href={process.env.REACT_APP_APK_LINK} download>
                        <Material className="home-first-download">فعال‌سازی</Material>
                    </a>
                    <div className="home-first-support mobile">
                        <HamrahSvg className="home-first-support-svg"/>
                        <div>قدرت‌گرفته از همراه اول</div>
                    </div>
                </div>
            </div>

            <div className="home-second-section">
                <WindSvg className="home-second-wind"/>
                <WindSvg className="home-second-wind-right"/>
                <CircleSvg className="home-second-circle"/>
                <LandingCurve2Svg className="home-second-curve"/>
                <img loading="lazy" className="home-first-first-design" src={secondDesign} alt=""/>
                <div className="home-second-left">
                    <div className="home-second-title">بچه‌ها چقدر تو گوشی هستن و چیا می‌بینن؟</div>
                    <div className="home-second-desc">
                        بچه‌های امروزی بیشتر از هر زمان دیگه و از سنین پایین‌تری، وقتشون رو با اینترنت می‌گذرونن و خیلی راحت به هر محتوایی که مناسب سن‌شون نیست، دسترسی دارن.
                    </div>
                    <div className="home-second-more">بیشتر بدونیم</div>
                    <a href={process.env.REACT_APP_APK_LINK} download><Material className="home-first-download">فعال‌سازی</Material></a>
                </div>
            </div>

            <div className="home-second-section">
                <WindSvg className="home-second-wind center"/>
                <LandingDots2Svg className="home-second-dots"/>
                <div className="home-second-left">
                    <div className="home-second-title">بومینو خیال مادرا و پدرا رو راحت‌تر می‌کنه</div>
                    <div className="home-third-content first">
                        <CheckSvg className="home-third-content-svg"/>
                        <div>با بومینو شما می‌تونید زمان استفاده از اینترنت بچه‌تون رو مدیریت کنید</div>
                    </div>
                    <div className="home-third-content">
                        <CheckSvg className="home-third-content-svg"/>
                        <div>با انتخاب ردهٔ سنی محتوای مناسب در اختیارش بگذارید</div>
                    </div>
                    <div className="home-third-content">
                        <CheckSvg className="home-third-content-svg"/>
                        <div>هر موقع که بخواید می‌تونید یه گزارش از فعالیت بچه‌تون داشته باشید</div>
                    </div>
                    <div className="home-second-more">بیشتر بدونیم</div>
                    <a href={process.env.REACT_APP_APK_LINK} download><Material className="home-first-download">فعال‌سازی</Material></a>
                </div>
                <img loading="lazy" className="home-first-first-design" src={thirdDesign} alt=""/>
            </div>

            <div className="home-second-section">
                <WindSvg className="home-second-wind rotated"/>
                <LandingCurveSvg className="home-second-curve"/>
                <img loading="lazy" className="home-first-first-design" src={forthDesign} alt=""/>
                <div className="home-second-left">
                    <div className="home-second-title">کلی محتوای جذاب توی بومینو پیدا کنید</div>
                    <div className="home-second-desc">
                        توی بومینو انواع بازی، کارتون، فیلم و ابزار آموزشی و سرگرمی پیدا می‌شه
                        بومینو بهتون می‌گه چه محتوایی مناسب با ردهٔ سنی بچه‌تونه
                        پیشنهادات بومینو خیالتون رو از نوع تاثیرگذاری محتوا راحت‌تر می‌کنه
                    </div>
                    <div className="home-second-more">بیشتر بدونیم</div>
                    <a href={process.env.REACT_APP_APK_LINK} download><Material className="home-first-download">فعال‌سازی</Material></a>
                </div>
            </div>

            <div className="home-download-app">
                <AppBgSvg className="home-download-app-bg"/>
                <PhoneSvg className="home-download-app-svg"/>
                <div className="home-download-app-content">
                    <div className="home-download-app-title">همین حالا اپلیکیشن بومینو رو نصب کنید</div>
                    <div className="home-download-app-desc">استفاده از بومینو کاملا رایگانه</div>
                    <div className="home-download-app-store">
                        <PlayStoreSvg className="home-download-app-store-svg"/>
                        <AppStoreSvg className="home-download-app-store-svg"/>
                        <Picture className="home-download-app-store-svg last-child" src={bazaar} alt="" srcSet={null}/>
                    </div>
                </div>
            </div>

            <HomeGuide/>

            <div className="home-questions">
                <PolygonSvg className="home-questions-polygon"/>
                <div className="home-questions-title">سوالات متداول</div>
                <FaqItem title="آیا استفاده از بومینو برای ما هزینه داره؟"
                         answer="خیر. استفاده از اپلیکیشن بومینو و کنترل استفادهٔ بچه‌ها از اینترنت هزینه‌ای نداره. بسیاری از محتواهای جذابی که معرفی می‌کنیم هم رایگان هستن."
                />
                <FaqItem title="آیا بومینو روی همهٔ گوشی‌ها قابل استفاده است؟"
                         answer="در حال حاضر بومینو روی همهٔ گوشی‌ها و تبلت‌های اندرویدی قابل استفاده است. کاربران iOS می‌تونن از نسخهٔ وب و یا از مسیر کدهای USSD اقدام کنن. البته در حال حاضر فقط می‌شه دسترسی اینترنت سیم‌کارت‌های همراه اول رو کنترل و محدود کرد."
                />
                <FaqItem title="آیا برای استفاده از بومینو، لازمه بچه‌مون گوشیِ جُدا داشته باشه؟"
                         answer="نه؛ لازم نیست حتما گوشی و سیم‌کارت جُدا داشته باشه. شما می‌تونید گوشیِ خودتون رو در حالت تحویل به فرزند بذارید و به بچه‌تون تحویل بدید."
                />
                <FaqItem title="آیا می‌شه مصرف اینترنت wifi و adsl و ... رو هم کنترل کرد؟"
                         answer="در حال حاضر فقط اینترنتی که با سیم‌کارت همراه اول در اختیار بچه‌تون گذاشتید رو می‌تونید کنترل کنید. به زودی در نسخه‌های بعدی کنترل بقیهٔ اینترنت‌ها هم ممکن می‌شه."
                />
                <FaqItem title="آیا بومینو فقط برای سیم‌کارت‌های همراه اول قابل استفاده‌ست؟"
                         answer="استفاده از قابلیت محدودکردن دسترسی بچه‌ها به محتوای مناسب ردهٔ سنی‌شون، در حال حاضر فقط برای اینترنت‌هایی که از سیم‌کارت همراه اول هستند امکان‌پذیره. به زودی کنترل بقیهٔ اینترنت‌ها هم ممکن می‌شه."
                />
                <div className="home-questions-download-title">همین حالا اپلیکیشن بومینو رو نصب کنید و از اینجا بچه‌تونو بفرستید اینترنت!</div>
                <a href={process.env.REACT_APP_APK_LINK} download><Material className="home-first-download bigger">فعال‌سازی</Material></a>
            </div>
        </div>
    )
}

export default HomePage
