import React, { useState } from 'react';
import './css/Content.css'
import WelcomeBar from './WelcomeBar.js'
import PreferedIndustries from './PreferedIndustries'
import ContactInfo from './ContactInfo'
import userimg from '../user.png'
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

    let hasStocks = true;
    let industries = ['Tech', 'Finance', 'Health', 'Materials']
    let person = {
        phone: '079 946 3654',
        mail: 'magnus.persson@hotmail.com',
        adress: 'Lantmilsgatan 7',
        zipCode: '415 01',
        city: 'Göteborg'
    }

    // Testing some components
    const myProfile = [
        <ContetItemHeader key='0' title={{ titleText: 'Min Profil', color: '#3C4368' }} button={{ buttonText: 'Redigera', bgColor: '#3C3C3B' }} borderColor='#45414E14' />,
        <UserImgNamePN key='1' colors={{ title: '#A1A8C3', userValues: '#3D4465' }} userData={{ img: userimg, name: 'Magnus Persson', personNr: '197808176331' }} />,
        <PreferedIndustries key='2' headingColor={colors.homeText[1]} indColor={colors.homeText[0]} industries={industries} />,
        <ContactInfo key='3' headingColor={colors.homeText[1]} indColor={colors.homeText[0]} person={person} />]
    const myOwn = [
        <ContetItemHeader key='0' title={{ titleText: 'Mitt Innehav', color: '#3C4368' }} button={{ buttonText: 'Min portfölj', bgColor: '#3C3C3B' }} borderColor='#45414E14' />,

    ]
    return (
        <div id="Content" >
            <header>
                <h2 className="title" style={titleColor}>{title}</h2>
                {content.showLatestUpdate && <p className="updated" style={updatedColor}>Senast uppdaterat {updated}</p>}
            </header>
            <WelcomeBar bgColor={colors.greetingBarBg} updated={updated} name={content.name} hasStocks={hasStocks} />
            <div id="contentItems">
                <ContentItem bgColor='#fff' shdowColor='#45414E14' innerComponents={myProfile} />
                <ContentItem bgColor='#fff' shdowColor='#45414E14' innerComponents={myOwn} />
            </div>
        </div>
    )
}

export default Content;