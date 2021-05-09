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
import GuideBgSvg from "../../media/svgs/GuideBgSvg"
import FaqItem from "../components/FaqItem"
import LogoSvg from "../../media/svgs/LogoSvg"
import WindSvg from "../../media/svgs/WindSvg"
import LandingDotsSvg from "../../media/svgs/LandingDotsSvg"
import CircleSvg from "../../media/svgs/CircleSvg"
import LandingCurveSvg from "../../media/svgs/LandingCurveSvg"
import LandingCurve2Svg from "../../media/svgs/LandingCurve2Svg"
import LandingDots2Svg from "../../media/svgs/LandingDots2Svg"
import TriangleSvg from "../../media/svgs/TriangleSvg"
import PolygonSvg from "../../media/svgs/PolygonSvg"

function HomePage()
{
    return (
        <>
            <div className="home-first-section">
                <WindSvg className="home-first-wind"/>
                <LandingDotsSvg className="home-first-dots"/>
                <div className="home-first-right">
                    <LogoSvg className="home-first-logo" />
                    <LogoTypeSvg className="home-first-logo-type"/>
                    <div className="home-first-title">از اینجا بچه‌تونو بفرستید اینترنت!</div>
                    <div className="home-first-desc">
                        بومینو دسترسی بچه‌ها رو به اینترنت
                        متناسب با ردهٔ سنی اون‌ها محدود می‌کنه
                        و با کلّی محتوای مناسب و جذّاب سرگرمشون می‌کنه
                    </div>
                    <div className="home-first-desktop-section">
                        <a href={process.env.REACT_APP_APK_LINK} download>
                            <Material className="home-first-download">دریافت اپلیکیشن</Material>
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
                        <Material className="home-first-download">دریافت اپلیکیشن</Material>
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
                <img className="home-first-first-design" src={secondDesign} alt=""/>
                <div className="home-second-left">
                    <div className="home-second-title">بچه‌ها چقدر تو گوشی هستن و چیا می‌بینن؟</div>
                    <div className="home-second-desc">
                        بچه‌های امروزی بیشتر از هر زمان دیگه و از سنین پایین‌تری، وقتشون رو با اینترنت می‌گذرونن و خیلی راحت به هر محتوایی که مناسب سن‌شون نیست، دسترسی دارن.
                    </div>
                    <div className="home-second-more">بیشتر بدونیم</div>
                    <a href={process.env.REACT_APP_APK_LINK} download><Material className="home-first-download">دریافت اپلیکیشن</Material></a>
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
                    <a href={process.env.REACT_APP_APK_LINK} download><Material className="home-first-download">دریافت اپلیکیشن</Material></a>
                </div>
                <img className="home-first-first-design" src={thirdDesign} alt=""/>
            </div>

            <div className="home-second-section">
                <WindSvg className="home-second-wind rotated"/>
                <LandingCurveSvg className="home-second-curve"/>
                <img className="home-first-first-design" src={forthDesign} alt=""/>
                <div className="home-second-left">
                    <div className="home-second-title">کلی محتوای جذاب توی بومینو پیدا کنید</div>
                    <div className="home-second-desc">
                        توی بومینو انواع بازی، کارتون، فیلم و ابزار آموزشی و سرگرمی پیدا می‌شه
                        بومینو بهتون می‌گه چه محتوایی مناسب با ردهٔ سنی بچه‌تونه
                        پیشنهادات بومینو خیالتون رو از نوع تاثیرگذاری محتوا راحت‌تر می‌کنه
                    </div>
                    <div className="home-second-more">بیشتر بدونیم</div>
                    <a href={process.env.REACT_APP_APK_LINK} download><Material className="home-first-download">دریافت اپلیکیشن</Material></a>
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

            <div className="home-guide">
                <GuideBgSvg className="home-guide-bg"/>
                <GuideBgSvg className="home-guide-bg-down"/>
                <TriangleSvg className="home-download-triangle" />
                <div className="home-guide-title">چطور از بومینو استفاده کنم؟</div>
                <div className="home-guide-content">
                    <div className="home-guide-content-text">
                        <div className="home-guide-item">
                            <div className="home-guide-item-title">1. دانلود</div>
                            <div>ابتدا اپلیکیشن را دانلود<br/>و نصب کنید.</div>
                        </div>
                        <div className="home-guide-item disable">
                            <div className="home-guide-item-title disable">2. ساخت اکانت</div>
                            <div>ثبت‌نام کنید و فرزند یا<br/>فرزندانتان را تعریف کنید.</div>
                        </div>
                        <div className="home-guide-item disable">
                            <div className="home-guide-item-title disable">3. فعال‌کردن اینترنت کودک</div>
                            <div>اینترنت را فعال کنید و<br/>با خیال آسوده<br/>به فرزندتان بسپارید.</div>
                        </div>
                    </div>
                    <div className="home-guide-dot-cont">
                        <div className="home-guide-dot"/>
                        <div className="home-guide-dot disable"/>
                        <div className="home-guide-dot disable"/>
                        <div className="home-guide-dot disable"/>
                        <div className="home-guide-dot disable"/>
                    </div>
                    <PhoneSvg className="home-guide-img"/>
                </div>
            </div>

            <div className="home-questions">
                <PolygonSvg className="home-questions-polygon"/>
                <div className="home-questions-title">سوالات متداول</div>
                <FaqItem title="آیا استفاده از بومینو برای من هزینه دارد؟ آیا استفاده از بومینو برای من هزینه دارد؟ آیا استفاده از بومینو برای من هزینه دارد؟"
                         answer="بومینو کاملا رایگانه و در هیچ مرحله و فرایندی هزینه‌ای را به شما تحمیل نمیکند بومینو کاملا رایگانه و در هیچ مرحله و فرایندی هزینه‌ای را به شما تحمیل نمیکند بومینو کاملا رایگانه و در هیچ مرحله و فرایندی هزینه‌ای را به شما تحمیل نمیکند بومینو کاملا رایگانه و در هیچ مرحله و فرایندی هزینه‌ای را به شما تحمیل نمیکند بومینو کاملا رایگانه و در هیچ مرحله و فرایندی هزینه‌ای را به شما تحمیل نمیکند بومینو کاملا رایگانه و در هیچ مرحله و فرایندی هزینه‌ای را به شما تحمیل نمیکند بومینو کاملا رایگانه و در هیچ مرحله و فرایندی هزینه‌ای را به شما تحمیل نمیکند بومینو کاملا رایگانه و در هیچ مرحله و فرایندی هزینه‌ای را به شما تحمیل نمیکند بومینو کاملا رایگانه و در هیچ مرحله و فرایندی هزینه‌ای را به شما تحمیل نمیکند بومینو کاملا رایگانه و در هیچ مرحله و فرایندی هزینه‌ای را به شما تحمیل نمیکند بومینو کاملا رایگانه و در هیچ مرحله و فرایندی هزینه‌ای را به شما تحمیل نمیکند بومینو کاملا رایگانه و در هیچ مرحله و فرایندی هزینه‌ای را به شما تحمیل نمیکند بومینو کاملا رایگانه و در هیچ مرحله و فرایندی هزینه‌ای را به شما تحمیل نمیکند بومینو کاملا رایگانه و در هیچ مرحله و فرایندی هزینه‌ای را به شما تحمیل نمیکند بومینو کاملا رایگانه و در هیچ مرحله و فرایندی هزینه‌ای را به شما تحمیل نمیکند بومینو کاملا رایگانه و در هیچ مرحله و فرایندی هزینه‌ای را به شما تحمیل نمیکند بومینو کاملا رایگانه و در هیچ مرحله و فرایندی هزینه‌ای را به شما تحمیل نمیکند بومینو کاملا رایگانه و در هیچ مرحله و فرایندی هزینه‌ای را به شما تحمیل نمیکند بومینو کاملا رایگانه و در هیچ مرحله و فرایندی هزینه‌ای را به شما تحمیل نمیکند بومینو کاملا رایگانه و در هیچ مرحله و فرایندی هزینه‌ای را به شما تحمیل نمیکند "/>
                <FaqItem title="آیا استفاده از بومینو برای من هزینه دارد؟" answer="بومینو کاملا رایگانه و در هیچ مرحله و فرایندی هزینه‌ای را به شما تحمیل نمیکند"/>
                <FaqItem title="آیا استفاده از بومینو برای من هزینه دارد؟" answer="بومینو کاملا رایگانه و در هیچ مرحله و فرایندی هزینه‌ای را به شما تحمیل نمیکند"/>
                <a href={process.env.REACT_APP_APK_LINK} download><Material className="home-first-download">دریافت اپلیکیشن</Material></a>
            </div>
        </>
    )
}

export default HomePage
