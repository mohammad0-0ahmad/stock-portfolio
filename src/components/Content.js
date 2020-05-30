import React, { useState } from 'react';
import './css/Content.css'

const Content = ({ content }) => {

    let colors = content.colors

    let [title, setTitle] = useState(content.title)
    let [updated, setUpdated] = useState(content.updated)

    let titleColor = {
        color: colors.contentTitle
    }
    let updatedColor = {
        color: colors.contentUpdate
    }
    return (
        <div id="Content" >
            <header>
                <h2 className="title" style={titleColor}>{title}</h2>
                {content.showLatestUpdate && <p className="updated" style={updatedColor}>Senast uppdaterat {updated}</p>}
            </header>
            <div id="contentItems"></div>
        </div>
    )
}

export default Content;