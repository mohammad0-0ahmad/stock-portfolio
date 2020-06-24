import React, { useState, useEffect } from 'react';
import LabelAndInput from './LabelAndInput';
import Button from './Button'
import { fetchJSON } from '../utilities/fetchData'
import { useHistory, useParams } from 'react-router-dom';
import AlertBox from './AlertBox'

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

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchJSON('/resetPassword/changePassword', { request, newPassword, newPasswordConfirmation }, (data) => {
            console.log(data)
            if (data.status) {
                AlertBox({ text: data.msg, success: data.status, confirmAction: () => history.push('/') });
            } else {
                AlertBox({ text: data.msg, success: data.status })
            }
        })
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
                    pattern='(?=.*[a-z])(?=.*[0-9])(?=.*[A-Z])[\w\d]{8,}'
                    title='Ogiltigt lösenord. Det måste vara upp till 8 siffror, även om det måste innehålla minst en siffra / versaler / gemener'
                    required={true} />
                <LabelAndInput
                    className='logInLabelAndInput'
                    labelText='Lösenord'
                    text={newPasswordConfirmation}
                    handleChange={setNewPasswordConfirmation}
                    type='password'
                    placeHolder='Bekräfta ditt nya lösenord'
                    pattern={newPassword}
                    title='Den stämmer inte med det nya lösenordet.'
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