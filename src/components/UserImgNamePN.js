import React from 'react'
import '../css/UserImgNamePN.css'
import RoundedImg from './RoundedImg'

const UserImgNamePN = ({ userData }) => {
    const { img, name, personNr } = userData

    return (
        <div className='UserImgNamePN'>
            <RoundedImg src={img} alt='User picture' />
            <div>
                <h2>{name}</h2>
                <p>Person Nr/Organisations Nr</p>
                <p>{`${personNr.slice(2, 8)}-${personNr.slice(-4)}`}</p>
            </div>
        </div>
    )
}

export default UserImgNamePN; 