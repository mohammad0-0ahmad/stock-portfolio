import React from 'react'
import '../css/ContentItem.css'

const ContentItem = ({ innerComponents }) => {
    return (
        <div className='ContentItem'>
            {innerComponents}
        </div>
    )
}
export default ContentItem;