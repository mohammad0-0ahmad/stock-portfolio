import React, { useState } from 'react'
import { useHistory } from "react-router-dom";
import LabelAndInput from './LabelAndInput'
import { fetchJSON } from '../utilities/fetchData'
import Button from './Button'
import TextAsLink from './TextAsLink'


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
                //show a response for user
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