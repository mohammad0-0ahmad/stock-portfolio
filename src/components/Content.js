import React, { useState } from 'react';
import './css/Content.css'
import WelcomeBar from './WelcomeBar.js'
import PreferedIndustries from './PreferedIndustries'
import ContactInfo from './ContactInfo'

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
        phone:'079 946 3654',
        mail:'magnus.persson@hotmail.com',
        adress:'Lantmilsgatan 7',
        zipCode: '415 01',
        city: 'Göteborg'
    }

    return (
        <div id="Content" >
            <header>
                <h2 className="title" style={titleColor}>{title}</h2>
                {content.showLatestUpdate && <p className="updated" style={updatedColor}>Senast uppdaterat {updated}</p>}
            </header>
            <br/>
            <WelcomeBar bgColor={colors.greetingBarBg} updated={updated} name={content.name} hasStocks={hasStocks}/>
            <PreferedIndustries headingColor={colors.homeText[1]} indColor={colors.homeText[0]} industries={industries}/>
            <br/>
            <ContactInfo headingColor={colors.homeText[1]} indColor={colors.homeText[0]} person={person}/>
        </div>
    )
}

export default Content;