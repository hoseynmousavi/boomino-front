import InstagramSvg from "../../media/svgs/InstagramSvg"
import LinkedinSvg from "../../media/svgs/LinkedinSvg"
import TelegramSvg from "../../media/svgs/TelegramSvg"

function SocialIcons()
{
    return (
        <>
            {/*<a className="footer-top-right-social-svg-link" href="https://www.instagram.com/boomino_official" target="_blank" rel="noreferrer"><TwitterSvg className="footer-top-right-social-svg"/></a>*/}
            <a className="footer-top-right-social-svg-link" href="https://www.instagram.com/boomino_official" target="_blank" rel="noreferrer"><InstagramSvg className="footer-top-right-social-svg"/></a>
            <a className="footer-top-right-social-svg-link" href="https://www.linkedin.com/company/mci-boomino" target="_blank" rel="noreferrer"><LinkedinSvg className="footer-top-right-social-svg"/></a>
            {/*<WhatsappSvg className="footer-top-right-social-svg"/>*/}
            <a className="footer-top-right-social-svg-link" href="https://t.me/boomino_official" target="_blank" rel="noreferrer"><TelegramSvg className="footer-top-right-social-svg"/></a>
        </>
    )
}

export default SocialIcons