import React, { useState } from 'react'
import { NavLink, useHistory } from "react-router-dom";
import LabelAndInput from './LabelAndInput'
import Button from './Button'
import { fetchJSON } from '../utilities/fetchData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleLeft } from '@fortawesome/free-regular-svg-icons'
import AlertBox from './AlertBox'

const ResetPasswordRequestForm = () => {
    const history = useHistory();
    const [email, setEmail] = useState('');

    const handelResetPasswordRequest = (e) => {
        e.preventDefault();
        fetchJSON('/resetPassword/request', { email }, (data) => {
            AlertBox({ text: data.msg, success: data.status, confirmAction: () => history.push('/') })
        })
    }

    return (
        <div>
            <h1>
                <NavLink to='/'><FontAwesomeIcon className='backToLogIn' icon={faArrowAltCircleLeft} /></NavLink>
                Återställ lösenord
            </h1>
            <form onSubmit={handelResetPasswordRequest}>
                <LabelAndInput
                    className='logInLabelAndInput'
                    labelText='E-postadress'
                    text={email}
                    handleChange={setEmail}
                    type='email'
                    placeHolder='Skriv in ditt e-post'
                    pattern="^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$"
                    title='Ogiltigt e-postadress.'
                    required={true}
                />
                <Button
                    buttonText='Återställ'
                    className='logInButton'
                    type='submit'
                />
            </form>
        </div>
    )
}

export default ResetPasswordRequestForm;