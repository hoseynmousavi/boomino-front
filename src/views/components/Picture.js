import React from "react"
import PropTypes from "prop-types"

function Picture(props)
{
    const {className, srcSet, src, alt} = props
    return (
        <picture className={className}>
            {srcSet && <source type="image/webp" srcSet={srcSet}/>}
            <img className="img-in-picture" loading="lazy" src={src} alt={alt}/>
        </picture>
    )
}

Picture.propTypes = {
    className: PropTypes.string,
    srcSet: PropTypes.string,
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
}

export default Picture