import React, { useState } from 'react'
import { NavLink, useHistory } from "react-router-dom";
import LabelAndInput from './LabelAndInput'
import Button from './Button'
import { fetchJSON } from '../utilities/fetchData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleLeft } from '@fortawesome/free-regular-svg-icons'

const ResetPasswordRequestForm = () => {
    const history = useHistory();
    const [email, setEmail] = useState('');

    const handelResetPasswordRequest = (e) => {
        e.preventDefault();
        fetchJSON('/resetPassword/request', { email }, (data) => {
            if (data.status) {
                //show a response for user
                history.push('/');
            } else {
                console.log(data.msg)
                //show a response for user
            }
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