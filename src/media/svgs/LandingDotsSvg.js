function LandingDotsSvg(props)
{
    return (
        <svg className={props.className} viewBox="0 0 280 280">
            <defs>
                <filter x="-21.7%" y="-21.7%" width="143.4%" height="143.4%" filterUnits="objectBoundingBox" id="filter-dots-1">
                    <feOffset dx="0" dy="8" in="SourceAlpha" result="shadowOffsetOuter1"/>
                    <feGaussianBlur stdDeviation="8" in="shadowOffsetOuter1" result="shadowBlurOuter1"/>
                    <feColorMatrix values="0 0 0 0 0.42745098   0 0 0 0 0.721568627   0 0 0 0 0.364705882  0 0 0 0.3 0" type="matrix" in="shadowBlurOuter1" result="shadowMatrixOuter1"/>
                    <feMerge>
                        <feMergeNode in="shadowMatrixOuter1"/>
                        <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                </filter>
            </defs>
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g transform="translate(-1699.000000, -672.000000)">
                    <g filter="url(#filter-dots-1)" transform="translate(1733.000000, 706.000000)">
                        <circle fill="#4FAC25" cx="7.19753086" cy="106.654321" r="7.19753086"/>
                        <circle fillOpacity="0.8" fill="#60C433" cx="39.9135802" cy="139.37037" r="7.19753086"/>
                        <circle fill="#4FAC25" cx="72.6296296" cy="172.08642" r="7.19753086"/>
                        <circle fillOpacity="0.8" fill="#60C433" cx="106.654321" cy="204.802469" r="7.19753086"/>
                        <circle fillOpacity="0.8" fill="#60C433" cx="172.08642" cy="139.37037" r="7.19753086"/>
                        <circle fillOpacity="0.8" fill="#60C433" cx="39.9135802" cy="72.6296296" r="7.19753086"/>
                        <circle fill="#7AC049" cx="72.6296296" cy="106.654321" r="7.19753086"/>
                        <circle fillOpacity="0.8" fill="#60C433" cx="106.654321" cy="139.37037" r="7.19753086"/>
                        <circle fillOpacity="0.8" fill="#60C433" cx="139.37037" cy="172.08642" r="7.19753086"/>
                        <circle fill="#F7931D" cx="204.802469" cy="106.654321" r="7.19753086"/>
                        <circle fillOpacity="0.8" fill="#60C433" cx="72.6296296" cy="39.9135802" r="7.19753086"/>
                        <circle fill="#7AC049" cx="106.654321" cy="72.6296296" r="7.19753086"/>
                        <circle fill="#7AC049" cx="172.08642" cy="72.6296296" r="7.19753086"/>
                        <circle fill="#4FAC25" cx="139.37037" cy="106.654321" r="7.19753086"/>
                        <circle fillOpacity="0.8" fill="#60C433" cx="106.654321" cy="7.19753086" r="7.19753086"/>
                        <circle fill="#7AC049" cx="139.37037" cy="39.9135802" r="7.19753086"/>
                    </g>
                </g>
            </g>
        </svg>
    )
}

export default LandingDotsSvg