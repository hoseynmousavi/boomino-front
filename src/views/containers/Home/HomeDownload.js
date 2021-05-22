import AppBgSvg from "../../../media/svgs/AppBgSvg"
import PhoneSvg from "../../../media/svgs/PhoneSvg"
import PlayStoreSvg from "../../../media/svgs/PlayStoreSvg"
import AppStoreSvg from "../../../media/svgs/AppStoreSvg"
import Picture from "../../components/Picture"
import bazaar from "../../../media/images/bazaar.png"
import ScrollY from "../../../helpers/ScrollY"

function HomeDownload()
{
    const scrollY = ScrollY()
    return (
        <div className="home-download-app">
            <AppBgSvg className="home-download-app-bg"/>
            <div className="home-download-app-svg-cont">
                <PhoneSvg className="home-download-app-svg"/>
            </div>
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
    )
}

export default HomeDownload