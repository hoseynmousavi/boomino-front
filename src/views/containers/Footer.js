import HamrahWhiteSvg from "../../media/svgs/HamrahWhiteSvg"
import LogoSvg from "../../media/svgs/LogoSvg"
import SocialIcons from "../components/SocialIcons"

function Footer()
{
    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="footer-top-right">
                    <div className="footer-top-right-title">
                        <LogoSvg className="footer-top-right-title-svg"/>
                        <div className="footer-top-right-title-text">بومینو | از اینجا بچه‌تونو بفرستید اینترنت</div>
                    </div>
                    <div className="footer-top-right-desc">بومینو همراه خونواده‌هاست تا خیالشون از حضور بچه‌ها تو اینترنت راحت‌تر باشه، با مراقبت از بچه‌ها و معرفی محتوای جذاب.</div>
                    <div className="footer-top-right-social">
                        <SocialIcons/>
                    </div>
                </div>
                <div className="footer-top-left">
                    <a className="footer-top-left-item app" href={process.env.REACT_APP_APK_LINK} download>
                        فعال‌سازی
                    </a>
                    <a className="footer-top-left-item web" href={process.env.REACT_APP_ACTIVATE_WEB_LINK} target="_blank" rel="noreferrer">
                        فعال‌سازی در وب
                    </a>
                    <div className="footer-top-left-item ussd">فعال‌سازی با کد USSD</div>
                    <div className="footer-top-left-item blog">بلاگ</div>
                    <div className="footer-top-left-item browser">مرورگر دورینو</div>
                    <div className="footer-top-left-item questions">سوالات متداول</div>
                    <div className="footer-top-left-item contact">تماس با ما</div>
                </div>
            </div>
            <div className="footer-top-right-social mobile">
                <SocialIcons/>
            </div>
            <div className="footer-bottom">
                <div className="footer-bottom-right">
                    کلیهٔ حقوق برای این سایت محفوظ است.
                </div>
                <div className="footer-bottom-left">
                    <HamrahWhiteSvg className="footer-bottom-left-svg"/>
                    <div>
                        قدرت‌گرفته از همراه اول
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
