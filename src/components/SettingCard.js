import React, { useState } from 'react';
import '../css/SettingCard.css'
import Content from './Content';
import ContentItem from './ContentItem'
import SettingNavBar from './SettingNavBar'
import ChangeAbleRoundedImg from './ChangeAbleRoundedImg';
import LabelAndInput from './LabelAndInput';
import TextAsLink from './TextAsLink'
import Button from './Button'
import userimg from '../imgs/user.png'
import UserConfirmation from './UserConfirmation'
import { fetchJSON } from '../utilities/fetchData'




const SETTING_SUB_NAV_BAR_TITLES = ['Min Profil', 'Byt lösenord', 'Preferenser']
const SettingCard = () => {
    const [selectedSettingSection, setSelectedSettingSection] = useState(SETTING_SUB_NAV_BAR_TITLES[0])
    // Testing some components

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



    const deleteData = () => {

        fetchJSON('/settings/deleteinfo', { session: localStorage.sessionId }, (data) => {
            if (data.status) {
                console.log('Delete succesful')
            } else {
            }
        })

    }

    return (
        <Content title='Inställningar' id='SettingCard'>
            <ContentItem>
                <SettingNavBar items={SETTING_SUB_NAV_BAR_TITLES} selected={selectedSettingSection} handleSelect={setSelectedSettingSection} />
                {
                    selectedSettingSection === SETTING_SUB_NAV_BAR_TITLES[0] &&
                    <>
                        <ChangeAbleRoundedImg src={userimg} handleClick={() => { console.log("change") }} alt='User picture' />
                        <div>
                            <div className='oneLine'>
                                <LabelAndInput type="text" labelText="Förnamn" text={firstName} handleChange={setFirstName} />
                                <LabelAndInput type="text" labelText="Efternamn" text={lastName} handleChange={setLastName} />
                            </div>
                            <LabelAndInput type="text" labelText="Personnummer" text={personNumber} handleChange={setPersonNumber} />
                            <LabelAndInput type="text" labelText="Adress" text={adress} handleChange={setAdress} />
                            <div className='oneLine'>
                                <LabelAndInput type="text" labelText="Stad" text={city} handleChange={setCity} />
                                <LabelAndInput type="text" labelText="Postnummer" text={zipCode} handleChange={setZipCode} />
                            </div>
                            <LabelAndInput type="text" labelText="Telefonnummer" text={phone} handleChange={setPhone} />
                            <LabelAndInput type="mail" labelText="Email" text={mail} handleChange={setMail} />
                            <Button buttonText='Radera mitt konto' handleClick={() => {
                                UserConfirmation(
                                    { text: 'Är du säker på att du vill radera all data?', confirmAction: () => { deleteData() } })
                            }} className='rejectButton' />

                        </div>
                    </>
                }
                {
                    selectedSettingSection === SETTING_SUB_NAV_BAR_TITLES[1] &&
                    <>
                        <LabelAndInput type="password" labelText="Nuvarande lösenord" text={passWord} />
                        <div>
                            <LabelAndInput type="password" labelText="Nytt lösenord" />
                            <LabelAndInput type="password" labelText="Bekräfta nytt lösenord" />
                        </div>
                    </>
                }
                {
                    selectedSettingSection === SETTING_SUB_NAV_BAR_TITLES[2] &&
                    <>
                        <p className='preferencesPreferedIndustriesContent'>Mina prefererade industrier att investera inom:</p>
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
                        <p className='preferencesTipToUser'>Tips! Ifall du väljer att integrerar din bank så kan vi anpassa dina investeringar utefter din ekonomi och preferenser.</p>
                        <div className='preferencesPreferedIndustriesContent oneLineLinkAndLabel'>
                            <TextAsLink text='Integrera min bank' handleClick={() => console.log("test")} />
                            <p className='preferencesPreferedIndustriesContent'>(detta kommer att skicka dig vidare etc....)</p>
                        </div>

                    </>
                }
                <div id='saveSetteingChangesBar'>
                    <Button buttonText='Spara' handleClick={() => { console.log("change") }} className='saveButton' />
                </div>
            </ContentItem>
        </Content>
    )
}
export default SettingCard;