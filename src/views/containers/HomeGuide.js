import GuideBgSvg from "../../media/svgs/GuideBgSvg"
import TriangleSvg from "../../media/svgs/TriangleSvg"
import PhoneSvg from "../../media/svgs/PhoneSvg"
import {PureComponent} from "react"
import smoothVerticalScrolling from "../../helpers/smoothVerticalScrolling"

class HomeGuide extends PureComponent
{
    constructor(props)
    {
        super(props)
        this.state = {
            guideLevel: 0,
        }
    }

    componentDidMount()
    {
        document.addEventListener("scroll", this.onScroll)
    }

    onWheel = e =>
    {
        const {guideLevel} = this.state || {}
        if (e.deltaY > 0)
        {
            if (guideLevel + 1 <= 2)
            {
                this.setState({guideLevel: guideLevel + 1})
            }
            else
            {
                document.body.style.overflowY = "auto"
                document.removeEventListener("mousewheel", this.onWheel)
                document.addEventListener("scroll", this.onScroll)
            }
        }
        else
        {
            if (guideLevel - 1 >= 0)
            {
                this.setState({guideLevel: guideLevel - 1})
            }
            else
            {
                document.body.style.overflowY = "auto"
                document.removeEventListener("mousewheel", this.onWheel)
                document.addEventListener("scroll", this.onScroll)
            }
        }
    }

    onScroll = () =>
    {
        const {guideLevel} = this.state || {}
        if (!this.topOffset) this.topOffset = this.boominoGuide.getBoundingClientRect().top - ((window.innerHeight - this.boominoGuide.getBoundingClientRect().height) / 2)
        if (guideLevel === 0)
        {
            if (window.scrollY > this.topOffset)
            {
                document.removeEventListener("scroll", this.onScroll)
                document.body.style.overflowY = "hidden"
                smoothVerticalScrolling(this.topOffset, 200)
                document.addEventListener("mousewheel", this.onWheel)
            }
        }
        else if (guideLevel === 2)
        {
            if (window.scrollY < this.topOffset)
            {
                document.removeEventListener("scroll", this.onScroll)
                document.body.style.overflowY = "hidden"
                smoothVerticalScrolling(this.topOffset, 200)
                document.addEventListener("mousewheel", this.onWheel)
            }
        }
    }

    render()
    {
        const {guideLevel} = this.state || {}
        return (
            <div className="home-guide">
                <GuideBgSvg className="home-guide-bg"/>
                <GuideBgSvg className="home-guide-bg-down"/>
                <TriangleSvg className="home-download-triangle"/>
                <div className="home-guide-title">چطور از بومینو استفاده کنم؟</div>
                <div className="home-guide-content" ref={e => this.boominoGuide = e}>
                    <div className="home-guide-content-text">
                        <div className={`home-guide-item ${guideLevel === 0 ? "" : "disable"}`}>
                            <div className={`home-guide-item-title ${guideLevel === 0 ? "" : "disable"}`}>1. دانلود</div>
                            <div>ابتدا اپلیکیشن را دانلود<br/>و نصب کنید.</div>
                        </div>
                        <div className={`home-guide-item ${guideLevel === 1 ? "" : "disable"}`}>
                            <div className={`home-guide-item-title ${guideLevel === 1 ? "" : "disable"}`}>2. ساخت اکانت</div>
                            <div>ثبت‌نام کنید و فرزند یا<br/>فرزندانتان را تعریف کنید.</div>
                        </div>
                        <div className={`home-guide-item ${guideLevel === 2 ? "" : "disable"}`}>
                            <div className={`home-guide-item-title ${guideLevel === 2 ? "" : "disable"}`}>3. فعال‌کردن اینترنت کودک</div>
                            <div>اینترنت را فعال کنید و<br/>با خیال آسوده<br/>به فرزندتان بسپارید.</div>
                        </div>
                        {/*<div className={`home-guide-item ${guideLevel === 3 ? "" : "disable"}`}>*/}
                        {/*    <div className={`home-guide-item-title ${guideLevel === 3 ? "" : "disable"}`}>4. فعال‌کردن اینترنت کودک</div>*/}
                        {/*    <div>اینترنت را فعال کنید و<br/>با خیال آسوده<br/>به فرزندتان بسپارید.</div>*/}
                        {/*</div>*/}
                    </div>
                    <div className="home-guide-dot-cont">
                        <div className="home-guide-dot"/>
                        <div className="home-guide-dot disable"/>
                        <div className="home-guide-dot disable"/>
                        <div className="home-guide-dot disable"/>
                    </div>
                    <PhoneSvg className="home-guide-img"/>
                </div>
            </div>
        )
    }
}

export default HomeGuide
