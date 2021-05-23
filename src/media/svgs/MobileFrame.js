function MobileFrame(props)
{
    return (
        <svg className={props.className} viewBox="0 0 233 416">
            <defs>
                <linearGradient x1="38.9391265%" y1="2.86754582%" x2="61.2145387%" y2="96.4623965%" id="linearGradient-frame">
                    <stop stopColor="#ACD6A2" offset="0%"/>
                    <stop stopColor="#7DBF6E" offset="42.9656729%"/>
                    <stop stopColor="#8FC881" offset="100%"/>
                </linearGradient>
            </defs>
            <g id="mockups/frame" stroke="none" strokeWidth="1" fill="none">
                <rect id="RectanglePale" fillOpacity="0.16" fill="#7AC049" x="0" y="0" width="233" height="416" rx="27"/>
                <rect id="RectangleBlack" fill="#344042" x="10" y="10" width="213" height="396" rx="27"/>
                <rect id="RectangleGreen" fill="url(#linearGradient-frame)" x="20" y="20" width="194" height="377" rx="27"/>
            </g>
        </svg>
    )
}

export default MobileFrame