import React from 'react'
import '../css/ContentItem.css'

const ContentItem = ({ children }) => {
    return (
        <div className='ContentItem'>
            {
                children
            }
        </div>
    )
}

export default ContentItem;