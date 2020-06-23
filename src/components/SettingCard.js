import React, { useState, useEffect } from 'react';
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
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [personNumber, setPersonNumber] = useState('')
    const [adress, setAdress] = useState('')
    const [city, setCity] = useState('')
    const [zipCode, setZipCode] = useState('')
    const [phone, setPhone] = useState('')
    const [mail, setMail] = useState('')
    const [password, setPassword] = useState('')
    const [newPassword1, setNewPassword1] = useState('')
    const [newPassword2, setNewPassword2] = useState('')


    const preferedIndustries = ['Bygg', 'Teknik', 'Hälsa', 'Dagligvaror', 'Råvaror', 'Finans', 'Fastigheter', 'Verkstad']

    const [bygg, setBygg] = useState(true)
    const [teknik, setTeknik] = useState(false)
    const [hälsa, setHälsa] = useState(true)
    const [dagligvaror, setDagligvaror] = useState(false)
    const [råvaror, setRåvaror] = useState(true)
    const [finans, setFinans] = useState(false)
    const [fastigheter, setFastigheter] = useState(true)
    const [verkstad, setVerkstad] = useState(true)

    useEffect(() => {
        fetchJSON('/userinfo', { session: localStorage.sessionId }, (data) => {
            if (data.status) {
                console.log('error')
            }
            else {
                setFirstName(data[0].f_name)
                setLastName(data[0].l_name)
                setPersonNumber(data[0].p_nr)
                setAdress(data[0].address)
                setCity(data[0].city)
                setZipCode(data[0].postal_code)
                setPhone(data[0].telephone)
                setMail(data[0].email)

            }
        })
    }, [])


    const deleteData = () => {

        fetchJSON('/settings/deleteinfo', { session: localStorage.sessionId }, (data) => {
            if (data.status) {
                console.log('Delete succesful')
            } else {
            }
        })

    }
    const changePassword = () => {

        fetchJSON('/settings/changePassword', {session: localStorage.sessionId, password: password, newPassword1: newPassword1, newPassword2: newPassword2},(data) => {
            if (data.status) {
                console.log('Change password succesful')
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
                        <LabelAndInput type="password" labelText="Nuvarande lösenord" text={password} handleChange={setPassword} />
                        <div>
                            <LabelAndInput type="password" labelText="Nytt lösenord" text={newPassword1} handleChange={setNewPassword1} />
                            <LabelAndInput type="password" labelText="Bekräfta nytt lösenord" text={newPassword2} handleChange={setNewPassword2} />
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
                    <Button buttonText='Spara' handleClick={() => {
                        switch (selectedSettingSection) {
                            case SETTING_SUB_NAV_BAR_TITLES[0]: { UserConfirmation(
                                { text: 'Är du säker på att du vill uppdatera din personliga information?', confirmAction: () => { console.log('hej') } }); break} 
                            case SETTING_SUB_NAV_BAR_TITLES[1]: { UserConfirmation(
                                { text: 'Är du säker på att du vill ändra lösenord?', confirmAction: () => { changePassword() } }); break } 
                            case SETTING_SUB_NAV_BAR_TITLES[2]: { UserConfirmation(
                                { text: 'Är du säker på att du vill ändra industrier?', confirmAction: () => { console.log('hej') } }); break } 
                            default:
                        }
                    }}

                        className='saveButton' />
                </div>
            </ContentItem>
        </Content>
    )
}
export default SettingCard;