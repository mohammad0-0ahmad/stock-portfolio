import React, { useState } from 'react';
import './css/Content.css'
import userimg from '../user.png'
// Testing some components
import ContentItem from './ContentItem'
import ContetItemHeader from './ContentItemHeader'
import UserImgNamePN from './UserImgNamePN'


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

    // Testing some components
    const myProfile = [
        <ContetItemHeader key='0' title={{ titleText: 'Min Profil', color: '#3C4368' }} button={{ buttonText: 'Redigera', bgColor: '#3C3C3B' }} borderColor='#45414E14' />,
        <UserImgNamePN  key='1' colors={{title:'#A1A8C3', userValues:'#3D4465' }} userData={{ img: userimg, name: 'Magnus Persson', personNr: '197808176331' }} />]
    const myOwn = [
        <ContetItemHeader key='0' title={{ titleText: 'Mitt Innehav', color: '#3C4368' }} button={{ buttonText: 'Min portfölj', bgColor: '#3C3C3B' }} borderColor='#45414E14' />,

    ]
    return (
        <div id="Content" >
            <header>
                <h2 className="title" style={titleColor}>{title}</h2>
                {content.showLatestUpdate && <p className="updated" style={updatedColor}>Senast uppdaterat {updated}</p>}
            </header>
            <div id="contentItems">
                <ContentItem bgColor='#fff' shdowColor='#45414E14' innerComponents={myProfile} />
                <ContentItem bgColor='#fff' shdowColor='#45414E14' innerComponents={myOwn} />
            </div>
        </div>
    )
}

export default Content;