import React, { useState, useEffect } from 'react'
import LabelAndInput from './LabelAndInput'
import { fetchJSON } from '../utilities/fetchData'
import Button from './Button'
import TextAsLink from './TextAsLink'
import AlertBox from './AlertBox'

const LoginForm = ({ history }) => {
    const [userEmail, setUserEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        document.title = 'Inlogning';
    }, [])

    const handleLogin = (e) => {
        e.preventDefault();
        fetchJSON('/login', { email: userEmail, password }, (data) => {
            if (data.status) {
                localStorage.setItem('sessionId', data.session)
                history.push('/login');
            } else if (data.status !== undefined) {
                AlertBox({ text: data.msg, success: data.status })
            }
        })
    }

    return (
        <div id='LoginForm'>
            <h1>
                Inloggning
            </h1>
            <form onSubmit={handleLogin}>
                <LabelAndInput
                    className='logInLabelAndInput'
                    labelText='E-postadress'
                    text={userEmail}
                    handleChange={setUserEmail}
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