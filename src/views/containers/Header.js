import Material from "../components/Material"
import ScrollY from "../../helpers/ScrollY"
import LogoSvg from "../../media/svgs/LogoSvg"
import HamburgerSvg from "../../media/svgs/HamburgerSvg"

function Header(props)
{
    const {backgroundColor} = props
    const scrollY = ScrollY()
    const defaultHeight = +(process.env.REACT_APP_HEADER_HEIGHT.replace("px", ""))
    const height = defaultHeight - (scrollY / 2) >= defaultHeight - 20 ? defaultHeight - (scrollY / 2) : defaultHeight - 20
    return (
        <header className={`header ${scrollY > 0 ? "down" : ""}`} style={{backgroundColor, height}}>
            <div className="header-right">
                <div className="header-right-logo-cont">
                    <LogoSvg className="header-right-logo" style={{transform: `rotate(${scrollY / 2}deg)`}}/>
                    <div className={`header-right-logo-test ${scrollY > 0 ? "hide" : ""}`}>
                        <div className="header-right-logo-test-triangle"/>
                        <div className="header-right-logo-test-text">نسخه آزمایشی</div>
                    </div>
                </div>
                <Material className="header-right-btn">مرورگر دورینو</Material>
                <Material className="header-right-btn">بلاگ</Material>
                <Material className="header-right-btn">سوالات متداول</Material>
                <Material className="header-right-btn">تماس با ما</Material>

                <HamburgerSvg className="header-hamburger"/>
                <div className="header-hamburger-name">{process.env.REACT_APP_NAME}</div>
            </div>
            <div className="header-left">
                <Material className="header-right-btn">فعال‌سازی با کد USSD</Material>
                <a href={process.env.REACT_APP_ACTIVATE_WEB_LINK} target="_blank" rel="noreferrer"><Material className="header-right-btn">فعال‌سازی در وب</Material></a>
                <a href={process.env.REACT_APP_APK_LINK} download><Material className="header-left-download">دریافت اپلیکیشن</Material></a>
            </div>
        </header>
    )
}

export default Header
