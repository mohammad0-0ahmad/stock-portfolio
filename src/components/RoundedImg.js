import React from 'react';
import './css/RoundedImg.css'

const RoundedImg = ({ src , alt }) => {
    return (<img className='RoundedImg' src={src} alt={alt}/>)
}

export default RoundedImg;