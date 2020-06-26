import React from 'react';
import '../css/UserImg.css'
import userDefaultImg from '../imgs/user.png'

const UserImg = ({ src, alt }) => {
    return (<img draggable="false" className='UserImg' src={src} onError={(e) => e.target.src = userDefaultImg} alt={alt} />)
}

export default UserImg;