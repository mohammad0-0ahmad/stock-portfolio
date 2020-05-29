import React from 'react';

const RoundedImg = ({ src, Diameter, alt }) => {
    const myStyle = {
        width: Diameter,
        height: Diameter,
        borderRadius: Diameter
    }
    return (<img src={src} alt={alt} style={myStyle} />)
}

export default RoundedImg;