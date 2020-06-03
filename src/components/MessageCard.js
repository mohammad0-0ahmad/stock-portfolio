import React from 'react'
import './css/MessageCard.css'
const MessageCard = ({ text, color }) => {
    return (
        <div className='MessageCard' style={{ color }}>
            <h1>{text}</h1>
        </div>
    )
}

export default MessageCard;