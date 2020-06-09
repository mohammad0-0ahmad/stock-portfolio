import React from 'react'
import LabelAndInput from './LabelAndInput'
import Button from './Button'
import TextAsLink from './TextAsLink'
import { useState } from 'react'
import '../css/EnteryPage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleLeft } from '@fortawesome/free-regular-svg-icons'

const CARDS = ['Inloggning', 'Registrering', 'Återställ lösenordet'];

const EnteryPage = ({ handleLogin }) => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [shownCard, SetShownCard] = useState(CARDS[0]);

    const handleSubmit = () => {

    }
    return (
        <div id='EnteryPage'>
            <div>
                <div
                    id={shownCard === CARDS[0] ? 'login' : ''}
                >
                    <h1>
                        {shownCard !== CARDS[0] &&
                            <FontAwesomeIcon className='backToLogIn' icon={faArrowAltCircleLeft} onClick={() => SetShownCard(CARDS[0])} />
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
                                    handleClick={() => SetShownCard(CARDS[2])}
                                />
                            }
                        </div>
                        {shownCard === CARDS[0] &&
                            <TextAsLink
                                className='logInTextAsLink'
                                text='Skaffa ett konto'
                                handleClick={() => SetShownCard(CARDS[1])}
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