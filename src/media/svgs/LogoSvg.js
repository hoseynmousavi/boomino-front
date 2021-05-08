function LogoSvg(props)
{
    return (
        <svg className={props.className} viewBox="0 0 72 72">
            <defs>
                <filter x="-18.8%" y="-18.8%" width="137.5%" height="137.5%" filterUnits="objectBoundingBox" id="filter-1">
                    <feOffset dx="0" dy="2" in="SourceAlpha" result="shadowOffsetOuter1"/>
                    <feGaussianBlur stdDeviation="2" in="shadowOffsetOuter1" result="shadowBlurOuter1"/>
                    <feColorMatrix values="0 0 0 0 1   0 0 0 0 0.478431373   0 0 0 0 0  0 0 0 0.3 0" type="matrix" in="shadowBlurOuter1" result="shadowMatrixOuter1"/>
                    <feMerge>
                        <feMergeNode in="shadowMatrixOuter1"/>
                        <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                </filter>
            </defs>
            <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="landing-New" transform="translate(-1748.000000, -46.000000)">
                    <g id="Group-4" transform="translate(1752.000000, 48.000000)" filter="url(#filter-1)">
                        <path d="M12.1956971,49.9006508 C11.0189043,50.9863445 11.2264719,52.9005788 12.6085259,53.7089391 L28.9821476,63.2864526 C29.8867962,63.8157499 31.0307241,63.691786 31.8010304,62.980867 L47.3409223,48.6425607 L31.8062196,31.8065247 L12.1956971,49.9006508 Z" id="Fill-1" fill="#F4811F"/>
                        <polygon id="Fill-3" fill="#ED3129" points="47.3406917 48.6424454 31.9005476 62.8890761 31.8065656 31.8064094"/>
                        <path d="M13.7120358,12.1956562 C12.6263421,11.0188634 10.7121079,11.226431 9.90374755,12.6084851 L0.326234037,28.9821067 C-0.20306326,29.8867553 -0.0790992963,31.0306833 0.631243046,31.8009896 L14.9701259,47.3408815 L31.806162,31.8061788 L13.7120358,12.1956562 Z" id="Fill-5" fill="#FFCA05"/>
                        <polygon id="Fill-7" fill="#F9A51A" points="14.9698953 47.3409391 0.723264668 31.900795 31.8065079 31.8062364"/>
                        <path d="M51.4166845,13.711995 C52.5934773,12.6263013 52.3864863,10.712067 51.0038557,9.90370668 L34.6308106,0.326193169 C33.7255854,-0.203104128 32.5816575,-0.0791401642 31.8113512,0.631778755 L16.2714593,14.9700851 L31.806162,31.8061211 L51.4166845,13.711995 Z" id="Fill-9" fill="#7AC04B"/>
                        <polygon id="Fill-11" fill="#01943F" points="16.2716899 14.9701427 31.711834 0.723512088 31.8063926 31.8061788"/>
                        <path d="M49.9009223,51.4169319 C50.986616,52.5937247 52.9002737,52.3861571 53.708634,51.0041031 L63.2867241,34.6304815 C63.8160214,33.7258328 63.6914809,32.5819049 62.9811385,31.8115986 L48.6422557,16.2717067 L31.8062196,31.8064094 L49.9009223,51.4169319 Z" id="Fill-13" fill="#F05A30"/>
                        <polygon id="Fill-15" fill="#C3151C" points="48.6424863 16.2717067 62.8891169 31.7118508 31.8064503 31.8064094"/>
                    </g>
                </g>
            </g>
        </svg>
    )
}

export default LogoSvg