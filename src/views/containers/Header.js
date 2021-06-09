import {memo, useEffect, useRef, useState} from "react"
import Material from "../components/Material"
import ScrollY from "../../helpers/ScrollY"
import LogoSvg from "../../media/svgs/LogoSvg"
import HamburgerSvg from "../../media/svgs/HamburgerSvg"
import PropTypes from "prop-types"
import ArrowDownSvg from "../../media/svgs/ArrowDownSvg"
import hexToRgba from "../../helpers/hexToRgba"
import DorinoSvg from "../../media/svgs/DorinoSvg"

function Header(props)
{
    const {backgroundColor = "var(--background-color)", zIndex = "var(--header-z-index)", disableShadow} = props
    const [showMenu, setShowMenu] = useState(false)
    const menuRef = useRef(null)
    const scrollY = ScrollY()
    const defaultHeight = +(process.env.REACT_APP_HEADER_HEIGHT.replace("px", ""))
    const headerHeightLow = +(process.env.REACT_APP_HEADER_LOW_HEIGHT.replace("px", ""))
    const height = Math.max(defaultHeight - (scrollY / 2), defaultHeight - headerHeightLow)
    const logoHeightMobile = Math.max(80 - (scrollY / 2), 50)
    const logoMarginMobile = Math.max(100 - scrollY, 0)

    function goToQuestions()
    {
        const questionSection = document.getElementById("home-questions")
        window.scroll({top: questionSection.offsetTop - defaultHeight + headerHeightLow, behavior: "smooth"})
    }

    function toggleMenu()
    {
        const tempShowMenu = !showMenu
        setShowMenu(tempShowMenu)
    }

    useEffect(() =>
    {
        if (showMenu) toggleMenu()
    }, [scrollY])

    return (
        <header className={`header ${disableShadow ? "disable-shadow" : ""} ${logoMarginMobile === 0 ? "down-mobile" : ""} ${scrollY > 0 ? "down" : ""}`} style={{backgroundColor, zIndex, height}}>
            <div className="header-right">
                <div className="header-right-logo-cont" style={{transform: `translate3d(-50%, calc(-50% + ${logoMarginMobile}px), 0) scale(${logoHeightMobile / 50})`}}>
                    <LogoSvg className="header-right-logo" style={{transform: `rotate(${scrollY / 2}deg)`}}/>
                    <div className={`header-right-logo-test ${logoMarginMobile <= 60 && logoMarginMobile !== 0 ? "" : "hide-mobile"} ${scrollY > 0 ? "hide" : ""}`}>
                        <div className="header-right-logo-test-triangle"/>
                        <div className="header-right-logo-test-text">نسخه آزمایشی</div>
                    </div>
                </div>
                <div className="header-right-products" ref={menuRef}>
                    <Material className={`header-right-btn ${showMenu ? "active" : ""}`} backgroundColor={hexToRgba(document.documentElement.style.getPropertyValue("--first-color"), 0.3)} onClick={toggleMenu}>
                        <div>محصولات</div>
                        <ArrowDownSvg className="header-right-btn-arrow"/>
                    </Material>
                    <div className={`header-right-btn-menu ${showMenu ? "" : "hide"}`}>
                        <Material className="header-right-btn-menu-item">
                            <LogoSvg className="header-right-btn-menu-item-svg"/>
                            <div>اپلیکیشن کنترل والدین</div>
                        </Material>
                        <Material className="header-right-btn-menu-item">
                            <DorinoSvg className="header-right-btn-menu-item-svg"/>
                            <div>مرورگر دورینو</div>
                        </Material>
                    </div>
                </div>
                <a href={process.env.REACT_APP_BLOG_LINK} target="_blank" rel="noreferrer"><Material className="header-right-btn">بلاگ</Material></a>
                <Material className="header-right-btn" onClick={goToQuestions}>سوالات متداول</Material>
                <Material className="header-right-btn">تماس با ما</Material>

                <HamburgerSvg className="header-hamburger"/>
                <div className="header-hamburger-name">{process.env.REACT_APP_NAME}</div>
            </div>
            <div className="header-left">
                <Material className="header-right-btn">فعال‌سازی با کد USSD</Material>
                <a href={process.env.REACT_APP_ACTIVATE_WEB_LINK} target="_blank" rel="noreferrer"><Material className="header-right-btn">فعال‌سازی در وب</Material></a>
                <a href={process.env.REACT_APP_APK_LINK} download><Material className="header-left-download">فعال‌سازی</Material></a>
            </div>
        </header>
    )
}

Header.propTypes = {
    backgroundColor: PropTypes.string,
    zIndex: PropTypes.string,
    disableShadow: PropTypes.bool,
}

export default memo(Header)