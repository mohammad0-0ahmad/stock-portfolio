import React from 'react'
import '../css/TextAsLink.css'

const TextAsLink = ({ text, handleClick, className }) => {
    return (
        <p
            className={`TextAsLink  ${className ? className : ''}`}
            onClick={handleClick}
        >
            {text}
        </p>
    )
}
export default TextAsLink;