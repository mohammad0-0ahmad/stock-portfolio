import React, { useState } from 'react'
import { NavLink } from "react-router-dom";
import LabelAndInput from './LabelAndInput'
import Button from './Button'
import { fetchJSON } from '../utilities/fetchData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleLeft } from '@fortawesome/free-regular-svg-icons'
import AlertBox from './AlertBox'

const RegisterForm = ({ history }) => {
    const [f_name, setF_name] = useState('');
    const [l_name, setL_name] = useState('');
    const [p_nr, setP_nr] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [postal_code, setPostal_code] = useState('');
    const [telephone, setTelephone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleRegister = (e) => {
        e.preventDefault();
        fetchJSON(
            '/register',
            { email, password, f_name, l_name, p_nr, address, city, postal_code, telephone },
            (data) => {
                if (data.status) {
                    AlertBox({ text: data.msg, success: data.status, confirmAction: () => history.push('/') })
                } else {
                    AlertBox({ text: data.msg, success: data.status })
                }
            })
    }

    return (
        <div id='RegisterForm'>
            <h1>
                <NavLink to='/'>
                    <FontAwesomeIcon className='backToLogIn' icon={faArrowAltCircleLeft} />
                </NavLink>
                Registrering
            </h1>
            <form onSubmit={handleRegister}>
                <div className='oneLine'>
                    <LabelAndInput
                        className='logInLabelAndInput'
                        labelText='Förnamn'
                        text={f_name}
                        handleChange={setF_name}
                        type='text'
                        placeHolder='Skriv in ditt förnamn'
                        required={true}
                    />
                    <LabelAndInput
                        className='logInLabelAndInput'
                        labelText='Efternamn'
                        text={l_name}
                        handleChange={setL_name}
                        type='text'
                        placeHolder='Skriv in ditt efternamn'
                        required={true}
                    />
                </div>
                <LabelAndInput
                    className='logInLabelAndInput'
                    labelText='Personnummer'
                    text={p_nr}
                    handleChange={setP_nr}
                    type='text'
                    placeHolder='Skriv in ditt personnummer'
                    pattern="^\d{12}$"
                    title='Ogiltigt personnummer. Det måste bestå av 12 siffror.'
                    required={true}
                />
                <LabelAndInput
                    className='logInLabelAndInput'
                    labelText='Adress'
                    text={address}
                    handleChange={setAddress}
                    type='text'
                    placeHolder='Skriv in din adress'
                    required={true}
                />
                <div className='oneLine'>
                    <LabelAndInput
                        className='logInLabelAndInput'
                        labelText='Postort'
                        text={city}
                        handleChange={setCity}
                        type='text'
                        placeHolder='Skriv in din postort'
                        required={true}
                    />
                    <LabelAndInput
                        className='logInLabelAndInput'
                        labelText='Postnummer'
                        text={postal_code}
                        handleChange={setPostal_code}
                        type='text'
                        placeHolder='Skriv in ditt postnummer'
                        pattern="^\d{5}$"
                        title='Ogiltigt postnummer. Det måste bestå av 5 siffror.'
                        required={true}
                    />
                </div>
                <LabelAndInput
                    className='logInLabelAndInput'
                    labelText='Telefonnummer'
                    text={telephone}
                    handleChange={setTelephone}
                    type='tel'
                    placeHolder='Skriv in ditt telefonnummer'
                    pattern="^[0-9]{10,15}$"
                    title='Ogiltigt telefonnummer.'
                    required={true}
                />
                <LabelAndInput
                    className='logInLabelAndInput'
                    labelText='E-postadress'
                    text={email}
                    handleChange={setEmail}
                    type='email'
                    placeHolder='Skriv in din e-post'
                    pattern="^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$"
                    title='Ogiltig e-postadress.'
                    required={true}
                />
                <LabelAndInput
                    className='logInLabelAndInput'
                    labelText='Lösenord'
                    text={password}
                    handleChange={setPassword}
                    type='password'
                    placeHolder='Skriv in ditt lösenord'
                    pattern='(?=.*[a-z])(?=.*[0-9])(?=.*[A-Z])[\w\d]{8,}'
                    title='Ogiltigt lösenord. Det måste vara minst 8 tecken och det måste innehålla minst en siffra / versaler / gemener'
                    required={true} />
                <Button
                    buttonText='Registrera'
                    className='logInButton'
                    type='submit'
                />
            </form>
        </div>
    )
}

export default RegisterForm;