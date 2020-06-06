import React, { useState } from 'react';
import '../css/Content.css'
import { PAGES } from './Dashboard'
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
import SettingNavBar from './SettingNavBar'
import StockTable from './StockTable'

const SETTING_SUB_NAV_BAR_TITLES = ['Min Profil', 'Byt lösenord', 'Preferenser']

const Content = ({ content }) => {
    const [selectedSettingSection, setSelectedSettingSection] = useState(SETTING_SUB_NAV_BAR_TITLES[0])

    // Testing some components
    const [selectedContent, setSelectedContent] = useState(PAGES[0])
    let updated = content.updated
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

    const tabData = [
        { title: 'Byggsektorn', details: 'Företag 1, Företag 2 +4', amount: '32 244' },
        { title: 'Medtech', details: 'Företag 1, Företag 2 +4', amount: '32 244' },
        { title: 'Fintech', details: 'Företag 1, Företag 2 +4', amount: '32 244' },
        { title: 'Industri', details: 'Företag 1, Företag 2 +4', amount: '32 244' },
        { title: 'Övrigt', details: 'Företag 1, Företag 2 +4', amount: '32 244' }
    ]
    const stockTableData = [
        { a: 'Företag X', b: '20 000', c: 'A', d: '3000st', e: '1-3000', f: '1.0%', g: '1.0%' },
        { a: 'Företag X', b: '20 000', c: 'A', d: '3000st', e: '1-3000', f: '1.0%', g: '1.0%' },
        { a: 'Företag X', b: '20 000', c: 'A', d: '3000st', e: '1-3000', f: '1.0%', g: '1.0%' },
        { a: 'Företag X', b: '20 000', c: 'A', d: '3000st', e: '1-3000', f: '1.0%', g: '1.0%' },
        { a: 'Företag X', b: '20 000', c: 'A', d: '3000st', e: '1-3000', f: '1.0%', g: '1.0%' },
        { a: 'Företag X', b: '20 000', c: 'A', d: '3000st', e: '1-3000', f: '1.0%', g: '1.0%' },
        { a: 'Företag X', b: '20 000', c: 'A', d: '3000st', e: '1-3000', f: '1.0%', g: '1.0%' },
        { a: 'Företag X', b: '20 000', c: 'A', d: '3000st', e: '1-3000', f: '1.0%', g: '1.0%' },
        { a: 'Företag X', b: '20 000', c: 'A', d: '3000st', e: '1-3000', f: '1.0%', g: '1.0%' },
        { a: 'Företag X', b: '20 000', c: 'A', d: '3000st', e: '1-3000', f: '1.0%', g: '1.0%' },
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
    const preferedIndustries = ['Bygg', 'Teknik', 'Hälsa', 'Dagligvaror', 'Råvaror', 'Finans', 'Fastigheter', 'Verkstad']

    const [bygg, setBygg] = useState(true)
    const [teknik, setTeknik] = useState(false)
    const [hälsa, setHälsa] = useState(true)
    const [dagligvaror, setDagligvaror] = useState(false)
    const [råvaror, setRåvaror] = useState(true)
    const [finans, setFinans] = useState(false)
    const [fastigheter, setFastigheter] = useState(true)
    const [verkstad, setVerkstad] = useState(true)

    return (
        <div id="Content" >
            <header>
                <h2 className="title">{selectedContent}</h2>
                {PAGES[1] === selectedContent && <p className="updated">Senast uppdaterat {updated}</p>}
            </header>
            {PAGES[0] === selectedContent && <WelcomeBar updated={updated} name={content.name} hasStocks={hasStocks} />}
            {
                PAGES[0] === selectedContent &&
                <div id="contentItems">
                    <ContentItem>
                        <ContetItemHeader title={'Min Profil'} button={{ buttonText: 'Redigera', handleClick: () => setSelectedContent(PAGES[2]) }} />
                        <UserImgNamePN userData={{ img: userimg, name: 'Magnus Persson', personNr: '197808176331' }} />
                        <PreferedIndustries industries={industries} />
                        <ContactInfo person={person} />
                    </ContentItem>
                    <ContentItem>
                        <ContetItemHeader key='0' title={'Mitt Innehav'} button={{ buttonText: 'Min portfölj', handleClick: () => setSelectedContent(PAGES[1]) }} />
                        <CurrentUpdate key='8' value="827,300 SEK" date="Uppdaterat 2020-02-26" />
                        <BarChart key='1' amountSectorsToShow={5} sectors={[50, 10, 20, 15, 20]} />
                        <BarChartDetailsList key='2' data={tabData} />
                    </ContentItem>
                </div>
            }
            {
                PAGES[1] === selectedContent &&
                <div id="contentItems">
                    <ContentItem>
                        <StockTable rows={stockTableData} />
                    </ContentItem>
                </div>
            }
            {
                PAGES[2] === selectedContent &&
                <div id="contentItems">
                    <ContentItem>
                        <div>
                            <SettingNavBar items={SETTING_SUB_NAV_BAR_TITLES} selected={selectedSettingSection} handleSelect={setSelectedSettingSection} />
                        </div>
                        {
                            selectedSettingSection === SETTING_SUB_NAV_BAR_TITLES[0] &&
                            <div>
                                <ChangeAbleRoundedImg src={userimg} handleClick={() => { console.log("change") }} alt='User picture' />
                                <div>
                                    <LabelAndInput type="text" labelText="Förnamn" text={firstName} twoInOneRow={true} handleChange={(e) => { setFirstName(e.target.value) }} />
                                    <LabelAndInput type="text" labelText="Efternamn" text={lastName} twoInOneRow={true} handleChange={(e) => { setLastName(e.target.value) }} />
                                </div>
                                <LabelAndInput type="text" labelText="Personnummer" text={personNumber} handleChange={(e) => { setPersonNumber(e.target.value) }} />
                                <LabelAndInput type="text" labelText="Adress" text={adress} handleChange={(e) => { setAdress(e.target.value) }} />
                                <div>
                                    <LabelAndInput type="text" labelText="Stad" text={city} twoInOneRow={true} handleChange={(e) => { setCity(e.target.value) }} />
                                    <LabelAndInput type="text" labelText="Postnummer" text={zipCode} twoInOneRow={true} handleChange={(e) => { setZipCode(e.target.value) }} />
                                </div>
                                <LabelAndInput type="text" labelText="Telefonnummer" text={phone} handleChange={(e) => { setPhone(e.target.value) }} />
                                <LabelAndInput type="mail" labelText="Email" text={mail} handleChange={(e) => { setMail(e.target.value) }} />
                                <Button buttonText='Spara' handleClick={() => { console.log("change") }} className='saveButton' />
                            </div>
                        }
                        {
                            selectedSettingSection === SETTING_SUB_NAV_BAR_TITLES[1] &&
                            <div>
                                <LabelAndInput type="password" labelText="Nuvarande lösenord" text={passWord} />
                                <LabelAndInput type="password" labelText="Nytt lösenord" />
                                <LabelAndInput type="password" labelText="Bekräfta nytt lösenord" />
                                <Button buttonText='Spara' handleClick={() => { setPassWord('nytt lösen') }} className='saveButton' />
                            </div>
                        }
                        {
                            selectedSettingSection === SETTING_SUB_NAV_BAR_TITLES[2] &&
                            <div>
                                <p>Mina prefererade industrier att investera inom:</p>
                                <div id='preferencesPreferedIndustries'>
                                    <LabelAndInput type='checkbox' checked={bygg} labelText={preferedIndustries[0]} handleChange={(e) => { setBygg(!bygg) }} />
                                    <LabelAndInput type='checkbox' checked={teknik} labelText={preferedIndustries[1]} handleChange={(e) => { setTeknik(!teknik) }} />
                                    <LabelAndInput type='checkbox' checked={hälsa} labelText={preferedIndustries[2]} handleChange={(e) => { setHälsa(!hälsa) }} />
                                    <LabelAndInput type='checkbox' checked={dagligvaror} labelText={preferedIndustries[3]} handleChange={(e) => { setDagligvaror(!dagligvaror) }} />
                                    <LabelAndInput type='checkbox' checked={råvaror} labelText={preferedIndustries[4]} handleChange={(e) => { setRåvaror(!råvaror) }} />
                                    <LabelAndInput type='checkbox' checked={finans} labelText={preferedIndustries[5]} handleChange={(e) => { setFinans(!finans) }} />
                                    <LabelAndInput type='checkbox' checked={fastigheter} labelText={preferedIndustries[6]} handleChange={(e) => { setFastigheter(!fastigheter) }} />
                                    <LabelAndInput type='checkbox' checked={verkstad} labelText={preferedIndustries[7]} handleChange={(e) => { setVerkstad(!verkstad) }} />
                                </div>
                                <Button buttonText='Spara' handleClick={() => { setPassWord('nytt lösen') }} className='saveButton' />
                            </div>
                        }

                    </ContentItem>
                </div>
            }
        </div>
    )
}

export default Content;
