import React from 'react'
import { useHistory } from "react-router-dom";
import LabelAndInput from './LabelAndInput'
import Button from './Button'
import TextAsLink from './TextAsLink'
import { useState } from 'react'
import '../css/EnteryPage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleLeft } from '@fortawesome/free-regular-svg-icons'

const CARDS = ['Inloggning', 'Registrering', 'Återställ lösenordet'];

const EnteryPage = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    let shownCard = (
        history.location.pathname === '/' ? CARDS[0] : (
            history.location.pathname === '/register' ? CARDS[1] : (
                history.location.pathname === '/reset-password' ? CARDS[2] : ''
            ))
    )

    const handleSubmit = (e) => {
        e.preventDefault()
        localStorage.setItem('sessionId','1234s56')
        history.push('/login')
    }
    return (
        <div id='EnteryPage'>
            <div>
                <div
                    id={shownCard === CARDS[0] ? 'login' : ''}
                >
                    <h1>
                        {shownCard !== CARDS[0] &&
                            <FontAwesomeIcon className='backToLogIn' icon={faArrowAltCircleLeft} onClick={() => history.push('/')} />
                        }
                        {shownCard}
                    </h1>
                    <form onSubmit={handleSubmit}>
                        {shownCard === CARDS[1] &&
                            <div id='register'>
                                <div className='oneLine'>
                                    <LabelAndInput
                                        className='logInLabelAndInput'
                                        labelText='Förnamn'
                                        text={userName}
                                        handleChange={setUserName}
                                        type='text'
                                        placeHolder='Skriv in ditt förnamn'
                                        required={true}
                                    />
                                    <LabelAndInput
                                        className='logInLabelAndInput'
                                        labelText='Efternamn'
                                        text={userName}
                                        handleChange={setUserName}
                                        type='text'
                                        placeHolder='Skriv in ditt efternamn'
                                        required={true}
                                    />
                                </div>
                                <LabelAndInput
                                    className='logInLabelAndInput'
                                    labelText='Personnummer'
                                    text={userName}
                                    handleChange={setUserName}
                                    type='text'
                                    placeHolder='Skriv in ditt personnummer'
                                    required={true}
                                />
                                <LabelAndInput
                                    className='logInLabelAndInput'
                                    labelText='Adress'
                                    text={userName}
                                    handleChange={setUserName}
                                    type='text'
                                    placeHolder='Skriv in din adress'
                                    required={true}
                                />
                                <div className='oneLine'>
                                    <LabelAndInput
                                        className='logInLabelAndInput'
                                        labelText='Postort'
                                        text={userName}
                                        handleChange={setUserName}
                                        type='text'
                                        placeHolder='Skriv in din postort'
                                        required={true}
                                    />
                                    <LabelAndInput
                                        className='logInLabelAndInput'
                                        labelText='Postnummer'
                                        text={userName}
                                        handleChange={setUserName}
                                        type='text'
                                        placeHolder='Skriv in ditt postnummer'
                                        required={true}
                                    />
                                </div>
                                <LabelAndInput
                                    className='logInLabelAndInput'
                                    labelText='Telefonnummer'
                                    text={userName}
                                    handleChange={setUserName}
                                    type='tel'
                                    placeHolder='Skriv in ditt telefonnummer'
                                    required={true}
                                />
                            </div>
                        }
                        <LabelAndInput
                            className='logInLabelAndInput'
                            labelText='E-postadress'
                            text={userName}
                            handleChange={setUserName}
                            type='email'
                            placeHolder='Skriv in ditt e-post'
                            required={true}
                        />{shownCard !== CARDS[2] &&
                            <LabelAndInput
                                className='logInLabelAndInput'
                                labelText='Lösenord'
                                text={password}
                                handleChange={setPassword}
                                type='password'
                                placeHolder='Skriv in ditt lösenord'
                                required={true} />
                        }
                        <div>
                            <Button
                                buttonText={
                                    shownCard === CARDS[0] ? 'Logga in' :
                                        (shownCard === CARDS[1] ? 'Registrea' :
                                            (shownCard === CARDS[2] ? 'Återställ' : '')
                                        )}
                                className='logInButton'
                                type='submit'
                            />
                            {shownCard === CARDS[0] &&
                                <TextAsLink
                                    className='logInTextAsLink'
                                    text=' Jag har glömt mitt lösenord'
                                    handleClick={() => history.push('/reset-password')}
                                />
                            }
                        </div>
                        {shownCard === CARDS[0] &&
                            <TextAsLink
                                className='logInTextAsLink'
                                text='Skaffa ett konto'
                                handleClick={() => history.push('/register')}
                            />
                        }
                    </form>
                </div>
                <div
                    className={`img  ${
                        shownCard === CARDS[0] ? 'leftSide' : ''
                        }`} >
                </div>
            </div>
        </div>
    )
}

export default EnteryPage;