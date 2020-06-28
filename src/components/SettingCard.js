import React, { useState, useEffect } from 'react';
import '../css/SettingCard.css'
import Content from './Content';
import ContentItem from './ContentItem'
import SettingNavBar from './SettingNavBar'
import ChangeAbleRoundedImg from './ChangeAbleRoundedImg';
import LabelAndInput from './LabelAndInput';
import TextAsLink from './TextAsLink'
import Button from './Button'
import UserConfirmation from './UserConfirmation'
import { fetchJSON, uploadImg, fetchImg } from '../utilities/fetchData'
import AlertBox from './AlertBox'

const SETTING_SUB_NAV_BAR_TITLES = ['Min Profil', 'Byt lösenord', 'Preferenser']

const SettingCard = () => {
    const [selectedSettingSection, setSelectedSettingSection] = useState(SETTING_SUB_NAV_BAR_TITLES[0])

    const [userImg, setUserImg] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [personalNumber, setPersonalNumber] = useState('')
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [postalCode, setPostalCode] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [newPassword1, setNewPassword1] = useState('')
    const [newPassword2, setNewPassword2] = useState('')
    const [preferredIndustries, setPreferredIndustries] = useState([])

    const [modifiedInfo, setModifiedInfo] = useState(true)
    const [modifiedPassword, setModifiedPassword] = useState(true)
    const [modifiedPreferredIndustries, setModifiedPreferredIndustries] = useState(true)

    useEffect(() => {
        document.title = 'Inställningar';

        fetchImg('/img', (data) => {
            setUserImg({ img: data, imgFile: false })
        })

        fetchJSON('/userinfo', null, (data) => {
            if (data.email) {
                setFirstName(data.f_name)
                setLastName(data.l_name)
                setPersonalNumber(data.p_nr)
                setAddress(data.address)
                setCity(data.city)
                setPostalCode(data.postal_code)
                setPhone(data.telephone)
                setEmail(data.email)
            }
            setModifiedInfo(false)
            setModifiedPassword(false)
        })

        fetchJSON("/industries", null, (data) => {
            if (data) {
                setPreferredIndustries(data);
            }
            setModifiedPreferredIndustries(false)
        });
    }, []);

    useEffect(() => {
        if (!modifiedInfo) {
            setModifiedInfo(true)
        }
    }, [firstName, lastName, personalNumber, address, city, postalCode, phone, email])

    useEffect(() => {
        if (!modifiedPassword) {
            setModifiedPassword(true)
        }
    }, [password, newPassword1, newPassword2])

    useEffect(() => {
        if (!modifiedPreferredIndustries) {
            setModifiedPreferredIndustries(true)
        }
    }, [preferredIndustries])

    const changeInfo = () => {
        if (modifiedInfo || userImg.imgFile) {
            UserConfirmation({
                text: 'Är du säker på att du vill uppdatera din personliga information?',
                confirmAction: async () => {
                    let uploadImgRes;
                    if (userImg.imgFile) {
                        await uploadImg('/uploadImg', userImg.imgFile, (data) => {
                            uploadImgRes = data
                            if (data.status) {
                                setUserImg({ img: userImg.img, imgFile: false });
                            }
                        });
                    }
                    fetchJSON('/settings/changeInfo',
                        { firstName, lastName, personalNumber, address, city, postalCode, phone, email },
                        (data) => {
                            if (uploadImgRes) {
                                AlertBox({ text: `${data.msg}\n${uploadImgRes.msg}`, success: data.status && uploadImgRes.status })
                            } else {
                                AlertBox({ text: data.msg, success: data.status })
                            }
                            if (data.status) {
                                setModifiedInfo(false);
                            }
                        })
                }
            })
        } else {
            AlertBox({ text: 'Du får ändra din personliga uppgifter först!' })
        }
    }

    const changePassword = () => {
        if (modifiedPassword) {
            UserConfirmation(
                {
                    text: 'Är du säker på att du vill ändra lösenord?',
                    confirmAction: () => {
                        fetchJSON('/settings/changePassword', {
                            password, newPassword1, newPassword2
                        }, (data) => {
                            AlertBox({ text: data.msg, success: data.status })
                            if (data.status) {
                                setPassword('')
                                setNewPassword1('')
                                setNewPassword2('')
                                setModifiedPassword(false)
                            }
                        })
                    }
                })
        } else {
            AlertBox({ text: 'Du får ändra ditt lösenord först!' })
        }
    }

    const changePreferredIndustries = (i) => {
        let temp = [...preferredIndustries];
        temp[i].preferred = !temp[i].preferred;
        setPreferredIndustries(temp);
    };

    const uploadPreferredIndustriesChanges = () => {
        if (modifiedPreferredIndustries) {
            UserConfirmation(
                {
                    text: 'Är du säker på att du vill ändra industrier?', confirmAction: () => {
                        fetchJSON(
                            "/changePreferredIndustries",
                            { industries: preferredIndustries },
                            (data) => {
                                if (data.status) {
                                    AlertBox({ text: data.msg, success: data.status });
                                    setModifiedPreferredIndustries(false);
                                }
                            }
                        );
                    }
                });
        } else {
            AlertBox({ text: 'Du får ändra dina föredragna industrier först!' })
        }
    }

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

    return (
        <Content title='Inställningar' id='SettingCard'>
            <ContentItem>
                <SettingNavBar items={SETTING_SUB_NAV_BAR_TITLES} selected={selectedSettingSection} handleSelect={setSelectedSettingSection} />
                {
                    selectedSettingSection === SETTING_SUB_NAV_BAR_TITLES[0] &&
                    <>
                        <ChangeAbleRoundedImg
                            src={userImg.img}
                            handleImgChange={img => setUserImg({ img: URL.createObjectURL(img), imgFile: img })}
                            alt='User picture'
                        />
                        <div>
                            <div className='oneLine'>
                                <LabelAndInput type="text" labelText="Förnamn" text={firstName} handleChange={setFirstName} />
                                <LabelAndInput type="text" labelText="Efternamn" text={lastName} handleChange={setLastName} />
                            </div>
                            <LabelAndInput type="text" labelText="Personnummer" text={personalNumber} handleChange={setPersonalNumber} />
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
                            <TextAsLink text='Integrera min bank' />
                            <p className='preferencesPreferredIndustriesContent'>(detta kommer att skicka dig vidare etc....)</p>
                        </div>
                    </>
                }
                <div id='saveSettingChangesBar'>
                    <Button buttonText='Spara' handleClick={() => {
                        switch (selectedSettingSection) {
                            case SETTING_SUB_NAV_BAR_TITLES[0]: changeInfo(); break;
                            case SETTING_SUB_NAV_BAR_TITLES[1]: changePassword(); break;
                            case SETTING_SUB_NAV_BAR_TITLES[2]: uploadPreferredIndustriesChanges(); break;
                            default: ;
                        }
                    }}
                        className='saveButton' />
                </div>
            </ContentItem>
        </Content>
    )
}

export default SettingCard;