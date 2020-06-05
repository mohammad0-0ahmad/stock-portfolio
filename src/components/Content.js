import React, { useState } from 'react';
import '../css/Content.css'
import WelcomeBar from './WelcomeBar.js'
import PreferedIndustries from './PreferedIndustries'
import ContactInfo from './ContactInfo'
import userimg from '../user.png'
import ContentItem from './ContentItem'
import ContetItemHeader from './ContentItemHeader'
import UserImgNamePN from './UserImgNamePN'
import CurrentUpdate from './CurrentUpdate'
import LabelAndInput from './LabelAndInput';
import ChangeAbleRoundedImg from './ChangeAbleRoundedImg';
import Button from './Button'
import BarChart from './BarChart'
import BarChartDetailsList from './BarChartDetailsList';

const Content = ({ content }) => {

    let [title, setTitle] = useState(content.title)
    let [updated, setUpdated] = useState(content.updated)

    let hasStocks = true;
    let industries = ['Tech', 'Finance', 'Health', 'Materials']
    let person = {
        firstName: 'Magnus',
        lastName: 'Persson',
        phone: '079 946 3654',
        mail: 'magnus.persson@hotmail.com',
        adress: 'Lantmilsgatan 7',
        zipCode: '415 01',
        city: 'Göteborg',
        personNumber: '780717-4444'
    }

    // Testing some components
    const myProfile = [
        <ContetItemHeader key='0' title={'Min Profil'} button={{ buttonText: 'Redigera', bgColor: '#3C3C3B' }} borderColor='#45414E14' />,
        <UserImgNamePN key='1' colors={{ title: '#A1A8C3', userValues: '#3D4465' }} userData={{ img: userimg, name: 'Magnus Persson', personNr: '197808176331' }} />,
        <PreferedIndustries key='2' industries={industries} />,
        <ContactInfo key='3' person={person} />,

    ]

    const tabData = [
        { title: 'Byggsektorn', details: 'Företag 1, Företag 2 +4', amount: '32 244' },
        { title: 'Medtech', details: 'Företag 1, Företag 2 +4', amount: '32 244' },
        { title: 'Fintech', details: 'Företag 1, Företag 2 +4', amount: '32 244' },
        { title: 'Industri', details: 'Företag 1, Företag 2 +4', amount: '32 244' },
        { title: 'Övrigt', details: 'Företag 1, Företag 2 +4', amount: '32 244' }
    ]

    const myOwn = [
        <ContetItemHeader key='0' title={'Mitt Innehav'} button={{ buttonText: 'Min portfölj', bgColor: '#3C3C3B' }} borderColor='#45414E14' />,
        <CurrentUpdate key='8' value="827,300 SEK" date="Uppdaterat 2020-02-26" />,
        <BarChart key='1' amountSectorsToShow={5} sectors={[50, 10, 20, 15, 20]} />,
        <BarChartDetailsList key='2' data={tabData} />
    ]
    const [firstName, setFirstName] = useState(person.firstName)
    const [lastName, setLastName] = useState(person.lastName)
    const [personNumber, setPersonNumber] = useState(person.personNumber)
    const [adress, setAdress] = useState(person.adress)
    const [city, setCity] = useState(person.city)
    const [zipCode, setZipCode] = useState(person.zipCode)
    const [phone, setPhone] = useState(person.phone)
    const [mail, setMail] = useState(person.mail)

    let edit = {
        bgColor: '#FDCC6B',
        handleClick: () => { console.log("change") }
    }

    const preferencesMyProfile = [
        <ChangeAbleRoundedImg src={userimg} edit={edit} alt='User picture' />,
        <div className='contactLabelInputSameLine'><LabelAndInput key={firstName} type="text" labelText="Förnamn" text={firstName} handleChange={(e) => { setFirstName(e.target.value) }} />
            <LabelAndInput key={lastName} type="text" labelText="Efternamn" text={lastName} handleChange={(e) => { setLastName(e.target.value) }} /></div>,
        <LabelAndInput key={personNumber} type="text" labelText="Personnummer" text={personNumber} handleChange={(e) => { setPersonNumber(e.target.value) }} />,
        <LabelAndInput key={adress} type="text" labelText="Adress" text={adress} handleChange={(e) => { setAdress(e.target.value) }} />,
        <div className='contactLabelInputSameLine'><LabelAndInput key={city} type="text" labelText="Stad" text={city} handleChange={(e) => { setCity(e.target.value) }} />
            <LabelAndInput key={zipCode} type="text" labelText="Postnummer" text={zipCode} handleChange={(e) => { setZipCode(e.target.value) }} /></div>,
        <LabelAndInput key={phone} type="text" labelText="Telefonnummer" text={phone} handleChange={(e) => { setPhone(e.target.value) }} />,
        <LabelAndInput key={mail} type="mail" labelText="Email" text={mail} handleChange={(e) => { setMail(e.target.value) }} />,
        <Button bgColor='#FDCC6B' width='10%' marginleft='60%' buttonText='Spara' handleClick={() => { console.log("change") }} className='saveButton' />
    ]

    const preferencesChangePassWord = [
        <LabelAndInput key={'nuvarande'} type="password" labelText="Nuvarande lösenord" text={''} handleChange={(e) => { setLastName(e.target.value) }} />,
        <LabelAndInput key={'nytt'} type="password" labelText="Nytt lösenord" text={''} handleChange={(e) => { setLastName(e.target.value) }} />,
        <LabelAndInput key={'Bekräfta'} type="password" labelText="Bekräfta nytt lösenord" text={''} handleChange={(e) => { setLastName(e.target.value) }} />

    ]


    return (
        <div id="Content" >
            <header>
                <h2 className="title">{title}</h2>
                {content.showLatestUpdate && <p className="updated">Senast uppdaterat {updated}</p>}
            </header>
            <WelcomeBar updated={updated} name={content.name} hasStocks={hasStocks} />
            <div id="contentItems">
                <ContentItem bgColor='#fff' shdowColor='#45414E14' innerComponents={myProfile} />
                <ContentItem bgColor='#fff' shdowColor='#45414E14' innerComponents={myOwn} />
                {/*<ContentItem innerComponents={preferencesMyProfile} />*/}
            </div>
        </div>
    )
}

export default Content;
