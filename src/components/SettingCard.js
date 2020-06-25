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
import AlertBox from './AlertBox'

const SETTING_SUB_NAV_BAR_TITLES = ['Min Profil', 'Byt lösenord', 'Preferenser']

const SettingCard = () => {
    const [selectedSettingSection, setSelectedSettingSection] = useState(SETTING_SUB_NAV_BAR_TITLES[0])
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [personNumber, setPersonNumber] = useState('')
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [postalCode, setPostalCode] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [newPassword1, setNewPassword1] = useState('')
    const [newPassword2, setNewPassword2] = useState('')
    const [preferredIndustries, setPreferredIndustries] = useState([]);

    const changePreferredIndustries = (i) => {
        let temp = [...preferredIndustries];
        temp[i].preferred = !temp[i].preferred;
        setPreferredIndustries(temp);
    };

    const showPreferredIndustries = () => {
        return preferredIndustries.map((industry, i) => (
            <LabelAndInput
                key={i}
                type="checkbox"
                checked={industry.preferred}
                labelText={industry.name}
                handleChange={() => changePreferredIndustries(i)}
            />
        ))
    }

    const uploadPreferredIndustriesChanges = () => {
        fetchJSON(
            "/changePreferredIndustries",
            { session: localStorage.sessionId, industries: preferredIndustries },
            (data) => {
                if (data.status) {
                    AlertBox({ text: data.msg, success: data.status });
                }
            }
        );
    };

    useEffect(() => {
        fetchJSON("/industries", { session: localStorage.sessionId }, (data) => {
            if (data) {
                setPreferredIndustries(data);
            }
        });

        fetchJSON('/userinfo', { session: localStorage.sessionId }, (data) => {
            if (data.email) {
                setFirstName(data.f_name)
                setLastName(data.l_name)
                setPersonNumber(data.p_nr)
                setAddress(data.address)
                setCity(data.city)
                setPostalCode(data.postal_code)
                setPhone(data.telephone)
                setEmail(data.email)
            }
        })
    }, []);

    const changePassword = () => {
        fetchJSON('/settings/changePassword', {
            session: localStorage.sessionId, 
            password,newPassword1, newPassword2
        }, (data) => {
            AlertBox({ text: data.msg, success: data.status })
        })
    }

    const changeInfo = () => {
        fetchJSON('/settings/changeInfo', {
            session: localStorage.sessionId, 
            firstName, lastName, personNumber,address, city, postalCode, phone, email
        }, (data) => {
            AlertBox({ text: data.msg, success: data.status })
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
                            <LabelAndInput type="text" labelText="Adress" text={address} handleChange={setAddress} />
                            <div className='oneLine'>
                                <LabelAndInput type="text" labelText="Postort" text={city} handleChange={setCity} />
                                <LabelAndInput type="text" labelText="Postnummer" text={postalCode} handleChange={setPostalCode} />
                            </div>
                            <LabelAndInput type="text" labelText="Telefonnummer" text={phone} handleChange={setPhone} />
                            <LabelAndInput type="mail" labelText="Email" text={email} handleChange={setEmail} />
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
                        <p className='preferencesPreferredIndustriesContent'>Mina prefererade industrier att investera inom:</p>
                        <div id='preferencesPreferredIndustries'>
                            {showPreferredIndustries()}
                        </div>
                        <p className='preferencesTipToUser'>Tips! Ifall du väljer att integrerar din bank så kan vi anpassa dina investeringar utefter din ekonomi och preferenser.</p>
                        <div className='preferencesPreferredIndustriesContent oneLineLinkAndLabel'>
                            <TextAsLink text='Integrera min bank' handleClick={() => console.log("test")} />
                            <p className='preferencesPreferredIndustriesContent'>(detta kommer att skicka dig vidare etc....)</p>
                        </div>
                    </>
                }
                <div id='saveSettingChangesBar'>
                    <Button buttonText='Spara' handleClick={() => {
                        switch (selectedSettingSection) {
                            case SETTING_SUB_NAV_BAR_TITLES[0]: {
                                UserConfirmation(
                                    { text: 'Är du säker på att du vill uppdatera din personliga information?', confirmAction: () => changeInfo() }); break
                            }
                            case SETTING_SUB_NAV_BAR_TITLES[1]: {
                                UserConfirmation(
                                    { text: 'Är du säker på att du vill ändra lösenord?', confirmAction: () => changePassword() }); break
                            }
                            case SETTING_SUB_NAV_BAR_TITLES[2]: {
                                UserConfirmation(
                                    { text: 'Är du säker på att du vill ändra industrier?', confirmAction: () => uploadPreferredIndustriesChanges() }); break
                            }
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