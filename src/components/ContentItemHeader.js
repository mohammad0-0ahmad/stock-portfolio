import React from 'react';
import Button from './Button';
import '../css/ContentItemHeader.css'

const ContentItemHeader = ({ title, button }) => {
    let { buttonText, handleClick } = button;
    return (
        <div className='ContentItemHeader'>
            <h2>{title}</h2>
            <Button buttonText={buttonText} handleClick={handleClick} />
        </div>
    )
}
export default ContentItemHeader;