import React from 'react'
import './css/ChangeAbleRoundedImg.css'
import RoundedImg from './RoundedImg'

const ChangeAbleRoundedImg = ({ src, alt, edit }) => {

    const { bgColor, handleClick } = edit

    return (
        <div className='ChangeAbleRoundedImg'>
            <RoundedImg src={src} alt={alt} />
            <div onClick={handleClick} style={{ backgroundColor: bgColor }}></div>
        </div>
    )
}
export default ChangeAbleRoundedImg;