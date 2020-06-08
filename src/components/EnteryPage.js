import React from 'react'
import LabelAndInput from './LabelAndInput'
import Button from './Button'
import TextAsLink from './TextAsLink'
import { useState } from 'react'
import '../css/EnteryPage.css'

const EnteryPage = ({ handleLogin, handleChangePassword, handleCreateAccount }) => {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const login = () => {
        handleLogin()
    }
    return (
        <div id='EnteryPage'>
            <div>
                <div>
                    <h1>Inloggning</h1>
                    <LabelAndInput
                        className='logInLabelAndInput'
                        labelText='E-postadress'
                        text={userName}
                        handleChange={setUserName}
                        type='text'
                        placeHolder='Skriv in ditt e-post'
                    />
                    <LabelAndInput
                        className='logInLabelAndInput'
                        labelText='Lösenord'
                        text={password}
                        handleChange={setPassword}
                        type='password'
                        placeHolder='Skriv in ditt lösenord' />
                    <div>
                        <Button
                            buttonText='Logga in'
                            handleClick={login}
                            className='logInButton'
                        />
                        <TextAsLink
                            className='logInTextAsLink'
                            text=' Jag har glömt mitt lösenord'
                            handleClick={handleChangePassword}
                        />

                    </div>
                    <TextAsLink
                        className='logInTextAsLink'
                        text='Skaffa ett konto'
                        handleClick={handleCreateAccount}
                    />
                </div>
                <div></div>
            </div>
        </div>
    )
}

export default EnteryPage;