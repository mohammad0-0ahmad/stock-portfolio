import React from 'react';
import Button from './Button';
import './css/ContentItemHeader.css'

const ContentItemHeader = ({ title, button, borderColor }) => {
    let { titleText, color } = title;
    let { bgColor, buttonText, handleClick } = button;
    return (
        <div className='ContentItemHeader' style={{ borderBottomColor: borderColor }}>
            <h2 style={{ color: color }}>{titleText}</h2>
            <Button bgColor={bgColor} buttonText={buttonText} handleClick={handleClick} />
        </div>
    )
}
export default ContentItemHeader;