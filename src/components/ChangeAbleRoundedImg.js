import React from 'react'
import '../css/ChangeAbleRoundedImg.css'
import RoundedImg from './RoundedImg'

const ChangeAbleRoundedImg = ({ src, alt, handleClick }) => {
    return (
        <div className='ChangeAbleRoundedImg'>
            <RoundedImg src={src} alt={alt} />
            <button onClick={handleClick}></button>
        </div>
    )
}

export default ChangeAbleRoundedImg;