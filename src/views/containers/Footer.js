import TwitterSvg from "../../media/svgs/TwitterSvg"
import InstagramSvg from "../../media/svgs/InstagramSvg"
import LinkedinSvg from "../../media/svgs/LinkedinSvg"
import WhatsappSvg from "../../media/svgs/WhatsappSvg"
import TelegramSvg from "../../media/svgs/TelegramSvg"
import HamrahWhiteSvg from "../../media/svgs/HamrahWhiteSvg"

function Footer()
{
    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="footer-top-right">
                    <div className="footer-top-right-title">بومینو | از اینجا بچه‌تونو بفرستید اینترنت</div>
                    <div className="footer-top-right-desc">بومینو همراه خونواده‌هاست تا خیالشون از حضور بچه‌ها تو اینترنت راحت‌تر باشه، با مراقبت از بچه‌ها و معرفی محتوای جذاب.</div>
                    <div className="footer-top-right-social">
                        <TwitterSvg className="footer-top-right-social-svg"/>
                        <InstagramSvg className="footer-top-right-social-svg"/>
                        <LinkedinSvg className="footer-top-right-social-svg"/>
                        <WhatsappSvg className="footer-top-right-social-svg"/>
                        <TelegramSvg className="footer-top-right-social-svg"/>
                    </div>
                </div>
                <div className="footer-top-left">
                    <a className="footer-top-left-item" href={process.env.REACT_APP_APK_LINK} download>
                        دریافت اپلیکیشن
                    </a>
                    <a className="footer-top-left-item" href={process.env.REACT_APP_ACTIVATE_WEB_LINK} target="_blank" rel="noreferrer">
                        فعال‌سازی در وب
                    </a>
                    <div className="footer-top-left-item">فعال‌سازی با کد USSD</div>
                    <div className="footer-top-left-item">بلاگ</div>
                    <div className="footer-top-left-item">مرورگر دورینو</div>
                    <div className="footer-top-left-item">سوالات متداول</div>
                    <div className="footer-top-left-item">تماس با ما</div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="footer-bottom-right">
                    کلیهٔ حقوق برای این سایت محفوظ است.
                </div>
                <div className="footer-bottom-left">
                    <HamrahWhiteSvg className="footer-bottom-left-svg"/>
                    <div>
                        قدرت گرفته از همراه اول
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer