import React, { useState, useEffect } from 'react';
import LabelAndInput from './LabelAndInput';
import Button from './Button'
import { fetchJSON } from '../utilities/fetchData'
import { useHistory, useParams } from 'react-router-dom';

const ResetPasswordForm = () => {
    const history = useHistory()

    const { request } = useParams('request')
    const [newPassword, setNewPassword] = useState('');
    const [newPasswordConfirmation, setNewPasswordConfirmation] = useState('');

    useEffect(() => {
        if (request) {
            fetchJSON('/resetPassword/check', { request }, (data) => {
                if (!data.status) {
                    history.push('/404');
                }
            })
        } else {
            history.push('/404');
        }
    }, [])

    const handleSubmit = () => {
        fetchJSON('/resetPassword/changePassword', { request, newPassword, newPasswordConfirmation }, (data) => {
            console.log(data)
        })
        history.push('/');
    }

    return (
        <div id='ResetPasswordForm'>
            <h1>
                Återställ lösenord
            </h1>
            <form onSubmit={handleSubmit}>
                <LabelAndInput
                    className='logInLabelAndInput'
                    labelText='Lösenord'
                    text={newPassword}
                    handleChange={setNewPassword}
                    type='password'
                    placeHolder='Skriv in ditt nya lösenord'
                    required={true} />
                <LabelAndInput
                    className='logInLabelAndInput'
                    labelText='Lösenord'
                    text={newPasswordConfirmation}
                    handleChange={setNewPasswordConfirmation}
                    type='password'
                    placeHolder='Bekräfta ditt nya lösenord'
                    required={true} />
                <Button
                    buttonText='Återställ'
                    className='logInButton'
                    type='submit'
                />
            </form>
        </div>
    )
}

export default ResetPasswordForm;