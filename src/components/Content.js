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
import BarChartSectorDetails from './BarChartSectorDetails'

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
        personNumber: '780717-4444',
        passWord: 'henrik'
    }

    // Testing some components
    const myProfile = [
        <ContetItemHeader key='0' title={'Min Profil'} button={{ buttonText: 'Redigera', bgColor: '#3C3C3B' }} borderColor='#45414E14' />,
        <UserImgNamePN key='1' colors={{ title: '#A1A8C3', userValues: '#3D4465' }} userData={{ img: userimg, name: 'Magnus Persson', personNr: '197808176331' }} />,
        <PreferedIndustries key='2' industries={industries} />,
        <ContactInfo key='3' person={person} />,

    ]

    const myOwn = [
        <ContetItemHeader key='0' title={'Mitt Innehav'} button={{ buttonText: 'Min portfölj', bgColor: '#3C3C3B' }} borderColor='#45414E14' />,
        <CurrentUpdate key='8' value="827,300 SEK" date="Uppdaterat 2020-02-26" />,
        <BarChart key='1' amountSectorsToShow={5} sectors={[50, 10, 20, 15, 20]} />,
        <BarChartSectorDetails key='2' data={{ title: 'Byggsektorn', details: 'Företag 1, Företag 2 +4', amount: '32 244' }} />,
        <BarChartSectorDetails key='3' data={{ title: 'Byggsektorn', details: 'Företag 1, Företag 2 +4', amount: '32 244' }} />,
        <BarChartSectorDetails key='4' data={{ title: 'Byggsektorn', details: 'Företag 1, Företag 2 +4', amount: '32 244' }} />,
        <BarChartSectorDetails key='5' data={{ title: 'Byggsektorn', details: 'Företag 1, Företag 2 +4', amount: '32 244' }} />,
        <BarChartSectorDetails key='6'
            data={{ title: 'Byggsektorn', details: 'Företag 1, Företag 2 +4', amount: '32 244' }}
        />
    ]

    const [firstName, setFirstName] = useState(person.firstName)
    const [lastName, setLastName] = useState(person.lastName)
    const [personNumber, setPersonNumber] = useState(person.personNumber)
    const [adress, setAdress] = useState(person.adress)
    const [city, setCity] = useState(person.city)
    const [zipCode, setZipCode] = useState(person.zipCode)
    const [phone, setPhone] = useState(person.phone)
    const [mail, setMail] = useState(person.mail)
    const [passWord, setPassWord] = useState(person.passWord)




    const preferencesMyProfile = (
        <div>
        <ChangeAbleRoundedImg src={userimg} handleClick={() =>{ console.log("change")}} alt='User picture' />
        <div className='contactLabelInputSameLine'><LabelAndInput className='LabelAndInput' type="text" labelText="Förnamn" text={firstName} handleChange={(e) => { setFirstName(e.target.value) }} />
            <LabelAndInput className='LabelAndInput' type="text" labelText="Efternamn" text={lastName} handleChange={(e) => { setLastName(e.target.value) }} /></div>
        <LabelAndInput className='LabelAndInput' type="text" labelText="Personnummer" text={personNumber} handleChange={(e) => { setPersonNumber(e.target.value) }} />
        <LabelAndInput className='LabelAndInput' type="text" labelText="Adress" text={adress} handleChange={(e) => { setAdress(e.target.value) }} />
        <div className='contactLabelInputSameLine'><LabelAndInput className='LabelAndInput' type="text" labelText="Stad" text={city} handleChange={(e) => { setCity(e.target.value) }} />
            <LabelAndInput className='LabelAndInput' type="text" labelText="Postnummer" text={zipCode} handleChange={(e) => { setZipCode(e.target.value) }} /></div>
        <LabelAndInput className='LabelAndInput' type="text" labelText="Telefonnummer" text={phone} handleChange={(e) => { setPhone(e.target.value) }} />
        <LabelAndInput className='LabelAndInput' type="mail" labelText="Email" text={mail} handleChange={(e) => { setMail(e.target.value) }} />
        <Button bgColor='#FDCC6B' width='10%' marginleft='60%' buttonText='Spara' handleClick={() => { console.log("change") }} className='saveButton' />
        </div>)

    const preferencesChangePassWord = (
        <div>
        <LabelAndInput className='LabelAndInput' type="password" labelText="Nuvarande lösenord" text={passWord}/>
        <LabelAndInput className='LabelAndInput' type="password" labelText="Nytt lösenord"/>
        <LabelAndInput className='LabelAndInput' type="password" labelText="Bekräfta nytt lösenord"/>
        <Button bgColor='#FDCC6B' width='10%' marginleft='60%' buttonText='Spara' handleClick={() => { setPassWord('nytt lösen') }} className='saveButton' />
        </div>)
    const preferedIndustries = ['Bygg','Teknik','Hälsa','Dagligvaror','Råvaror','Finans','Fastigheter','Verkstad']
    

    const [bygg, setBygg] = useState(true)
    const [teknik, setTeknik] = useState(false)
    const [hälsa, setHälsa] = useState(true)
    const [dagligvaror, setDagligvaror] = useState(false)
    const [råvaror, setRåvaror] = useState(true)
    const [finans, setFinans] = useState(false)
    const [fastigheter, setFastigheter] = useState(true)
    const [verkstad, setVerkstad] = useState(true)



    const preferencesPreferedIndustries = (
        <div>
        <p>Mina prefererade industrier att investera inom:</p>
        <div className='preferencesPreferedIndustries'>
        <LabelAndInput key={preferedIndustries[0]} className='preferencesPreferedIndustriesItems' type='checkbox' checked={bygg} labelText={preferedIndustries[0]} handleChange={(e) => {setBygg(!bygg)}}/>
        <LabelAndInput key={preferedIndustries[1]} className='preferencesPreferedIndustriesItems' type='checkbox' checked={teknik} labelText={preferedIndustries[1]} handleChange={(e) => {setTeknik(!teknik)}}/>
        <LabelAndInput key={preferedIndustries[2]} className='preferencesPreferedIndustriesItems' type='checkbox' checked={hälsa} labelText={preferedIndustries[2]} handleChange={(e) => {setHälsa(!hälsa)}}/>
        <LabelAndInput key={preferedIndustries[3]} className='preferencesPreferedIndustriesItems' type='checkbox' checked={dagligvaror} labelText={preferedIndustries[3]} handleChange={(e) => {setDagligvaror(!dagligvaror)}}/>
        <LabelAndInput key={preferedIndustries[4]} className='preferencesPreferedIndustriesItems' type='checkbox' checked={råvaror} labelText={preferedIndustries[4]} handleChange={(e) => {setRåvaror(!råvaror)}}/>
        <LabelAndInput key={preferedIndustries[5]} className='preferencesPreferedIndustriesItems' type='checkbox' checked={finans} labelText={preferedIndustries[5]} handleChange={(e) => {setFinans(!finans)}}/>
        <LabelAndInput key={preferedIndustries[6]} className='preferencesPreferedIndustriesItems' type='checkbox' checked={fastigheter} labelText={preferedIndustries[6]} handleChange={(e) => {setFastigheter(!fastigheter)}}/>
        <LabelAndInput key={preferedIndustries[7]} className='preferencesPreferedIndustriesItems' type='checkbox' checked={verkstad} labelText={preferedIndustries[7]} handleChange={(e) => {setVerkstad(!verkstad)}}/>
        </div>
        <Button bgColor='#FDCC6B' width='10%' marginleft='60%' buttonText='Spara' handleClick={() => { setPassWord('nytt lösen') }} className='saveButton' />
        </div>)


    return (
        <div id="Content" >
            <header>
                <h2 className="title">{title}</h2>
                {content.showLatestUpdate && <p className="updated">Senast uppdaterat {updated}</p>}
            </header>
            <WelcomeBar updated={updated} name={content.name} hasStocks={hasStocks} />
            <div id="contentItems">
              {/*  <ContentItem bgColor='#fff' shdowColor='#45414E14' innerComponents={myProfile} />
                <ContentItem bgColor='#fff' shdowColor='#45414E14' innerComponents={myOwn} />
                <ContentItem bgColor='#fff' shdowColor='#45414E14' innerComponents={preferencesMyProfile}/>
                <ContentItem bgColor='#fff' shdowColor='#45414E14' innerComponents={preferencesChangePassWord}/>*/}
                <ContentItem bgColor='#fff' shdowColor='#45414E14' innerComponents={preferencesPreferedIndustries}/>

            </div>
        </div>
    )
}

export default Content;
