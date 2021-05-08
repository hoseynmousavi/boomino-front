import Material from "../components/Material"
import logo from "../../media/images/logoTemp.png"

function Header()
{
    return (
        <header className="header">
            <div className="header-right">
                <img className="header-right-logo" src={logo} alt={process.env.REACT_APP_NAME}/>
                <Material className="header-right-btn">مرورگر دورینو</Material>
                <Material className="header-right-btn">بلاگ</Material>
                <Material className="header-right-btn">سوالات متداول</Material>
                <Material className="header-right-btn">تماس با ما</Material>
            </div>
            <div className="header-left">
                <Material className="header-right-btn">ورود</Material>
                <Material className="header-left-download">دریافت اپلیکیشن</Material>
            </div>
        </header>
    )
}

export default Header
