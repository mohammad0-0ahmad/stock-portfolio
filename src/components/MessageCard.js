import React from 'react'
import '../css/MessageCard.css'
const MessageCard = ({ text }) => {
    return (
        <div className='MessageCard' >
            <h1>{text}</h1>
        </div>
    )
}

export default MessageCard;