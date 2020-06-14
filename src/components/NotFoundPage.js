import React from 'react'
import '../css/NotFoundPage.css'
import Button from './Button'
import { useHistory } from 'react-router-dom'

const NotFoundPage = () => {
    const history = useHistory()
    return (
        <div id='NotFoundPage'>
        <div id='img404'></div>
        <Button buttonText='Gå tillbaka' handleClick={()=>{history.push('/')}} className='logInButton'/>
        </div>
    )
}
export default NotFoundPage;