import React from 'react'
import './css/ContentItem.css'

const ContentItem = ({ bgColor, shdowColor, innerComponents }) => {
    return (
        <div className='ContentItem' style={{ backgroundColor: bgColor, boxShadow: `0px 0px 5px ${shdowColor}` }}>
            {innerComponents}
        </div>
    )
}
export default ContentItem;