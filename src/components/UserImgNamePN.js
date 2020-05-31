import React from 'react'
import './css/UserImgNamePN.css'
import RoundedImg from './RoundedImg'

const UserImgNamePN = ({ colors, userData }) => {

    const { img, name, personNr } = userData
    const { title, userValues } = colors
    const titleStyle = { color: title }
    const userValuesStyle = { color: userValues }

    return (
        <div className='UserImgNamePN'>
            <RoundedImg src={img} alt='User picture'/>
            <div>
                <h2 style={userValuesStyle}>{name}</h2>
                <p style={titleStyle}>Person Nr/Organisations Nr</p>
                <p style={userValuesStyle}>{`${personNr.slice(2,8)}-${personNr.slice(-4)}`}</p>
            </div>
        </div>
    )
}
export default UserImgNamePN; 