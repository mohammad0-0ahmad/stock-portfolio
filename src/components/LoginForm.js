import React, { useState } from 'react'
import { useHistory } from "react-router-dom";
import LabelAndInput from './LabelAndInput'
import { fetchJSON } from '../utilities/fetchData'
import Button from './Button'
import TextAsLink from './TextAsLink'
import AlertBox from './AlertBox'

const LoginForm = () => {
    const [userEmail, setUserEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const handelLogin = (e) => {
        e.preventDefault();
        fetchJSON('/login', { email: userEmail, password }, (data) => {
            if (data.status) {
                localStorage.setItem('sessionId', data.session)
                history.push('/login');
            } else {
                AlertBox({ text: data.msg, success: data.status })
            }
        })
    }

    return (
        <div id='LoginForm'>
            <h1>
                Inloggning
            </h1>
            <form onSubmit={handelLogin}>
                <LabelAndInput
                    className='logInLabelAndInput'
                    labelText='E-postadress'
                    text={userEmail}
                    handleChange={setUserEmail}
                    type='email'
                    placeHolder='Skriv in ditt e-post'
                    pattern="^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$"
                    title='Ogiltigt e-postadress.'
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
                    title='Ogiltigt lösenord. Det måste vara upp till 8 siffror, även om det måste innehålla minst en siffra / versaler / gemener'
                    required={true} />
                <div>
                    <Button
                        buttonText='Logga in'
                        className='logInButton'
                        type='submit'
                    />
                    <TextAsLink
                        className='logInTextAsLink'
                        text=' Jag har glömt mitt lösenord'
                        handleClick={() => history.push('/reset-password')}
                    />
                </div>
                <TextAsLink
                    className='logInTextAsLink'
                    text='Skaffa ett konto'
                    handleClick={() => history.push('/register')}
                />
            </form>
        </div>
    )
}

export default LoginForm;