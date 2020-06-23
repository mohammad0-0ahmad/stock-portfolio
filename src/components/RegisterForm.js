import React, { useState } from 'react'
import { NavLink, useHistory } from "react-router-dom";
import LabelAndInput from './LabelAndInput'
import Button from './Button'
import { fetchJSON } from '../utilities/fetchData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleLeft } from '@fortawesome/free-regular-svg-icons'

const RegisterForm = () => {
    const history = useHistory();
    const [f_name, setF_name] = useState('');
    const [l_name, setL_name] = useState('');
    const [p_nr, setP_nr] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [postal_code, setPostal_code] = useState('');
    const [telephone, setTelephone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handelRegister = (e) => {
        e.preventDefault();
        fetchJSON(
            '/register',
            { email, password, f_name, l_name, p_nr, address, city, postal_code, telephone },
            (data) => {
                if (data.status) {
                    console.log(data.msg)
                    //show a response for user
                    history.push('/');
                } else {
                    console.log(data.msg)
                    //show a response for user
                }
            })
    }

    return (
        <div id='RegisterForm'>
            <h1>
                <NavLink to='/'><FontAwesomeIcon className='backToLogIn' icon={faArrowAltCircleLeft} /></NavLink>
                Registrering
            </h1>
            <form onSubmit={handelRegister}>
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
                    required={true}
                />
                <LabelAndInput
                    className='logInLabelAndInput'
                    labelText='E-postadress'
                    text={email}
                    handleChange={setEmail}
                    type='email'
                    placeHolder='Skriv in ditt e-post'
                    required={true}
                />
                <LabelAndInput
                    className='logInLabelAndInput'
                    labelText='Lösenord'
                    text={password}
                    handleChange={setPassword}
                    type='password'
                    placeHolder='Skriv in ditt lösenord'
                    required={true} />
                <Button
                    buttonText='Registrea'
                    className='logInButton'
                    type='submit'
                />
            </form>
        </div>
    )
}

export default RegisterForm;