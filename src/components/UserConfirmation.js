import React from 'react'
import ReactDOM from 'react-dom'
import Button from './Button'
import '../css/UserConfirmation.css'

const UserConfirmation = ({ text, confirmAction, rejectAction, duration = 10 }) => {
    var div = document.createElement('div');
    div.setAttribute('id', 'UserConfirmation');
    ReactDOM.render(
        <div>
            <h1>{text}</h1>
            <div id='makeDecision'>
                <Button
                    buttonText='Ja'
                    className='confirmButton'
                    handleClick={() => {
                        confirmAction && confirmAction()
                        div.remove()
                    }
                    } />
                <Button
                    buttonText='Nej'
                    className='rejectButton'
                    handleClick={() => {
                        rejectAction && rejectAction()
                        div.remove()
                    }} />
            </div>
        </div>
        , div);
    document.getElementsByTagName('body')[0].appendChild(div);
    setTimeout(() => {
        div.style.transition = '1s';
        div.style.opacity = 0;
        setTimeout(() => div.remove(), 1000);
    }, (duration - 1) * 1000)
}

export default UserConfirmation;