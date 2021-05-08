import Material from "../components/Material"
import ScrollY from "../../helpers/ScrollY"
import LogoSvg from "../../media/svgs/LogoSvg"

function Header()
{
    const scrollY = ScrollY()
    const defaultHeight = +(process.env.REACT_APP_HEADER_HEIGHT.replace("px", ""))
    const height = defaultHeight - (scrollY / 2) >= defaultHeight - 20 ? defaultHeight - (scrollY / 2) : defaultHeight - 20
    return (
        <header className={`header ${scrollY ? "down" : ""}`} style={{height}}>
            <div className="header-right">
                <LogoSvg className="header-right-logo"/>
                <Material className="header-right-btn">مرورگر دورینو</Material>
                <Material className="header-right-btn">بلاگ</Material>
                <Material className="header-right-btn">سوالات متداول</Material>
                <Material className="header-right-btn">تماس با ما</Material>
            </div>
            <div className="header-left">
                <Material className="header-right-btn">فعال‌سازی با کد USSD</Material>
                <Material className="header-right-btn">فعال‌سازی در وب</Material>
                <Material className="header-left-download">دریافت اپلیکیشن</Material>
            </div>
        </header>
    )
}

export default Header