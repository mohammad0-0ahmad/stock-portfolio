import React from 'react'
import '../css/ChangeAbleRoundedImg.css'
import UserImg from './UserImg'

const ChangeAbleRoundedImg = ({ src, alt, handleImgChange }) => {

    const handleImgChanging = () => {
        const input = document.getElementById('changeUserImg');
        input.click();
    }

    const handleChange = async (e) => {
        var img = e.target.files[0];
        if (img) {
            handleImgChange(img);
        }
    }

    return (
        <div className='ChangeAbleRoundedImg'>
            <input type='file' id='changeUserImg' accept="image/png,image/jpeg" onChange={handleChange} />
            <UserImg src={src} alt={alt} id='USERACCOUNTIMG' />
            <button onClick={handleImgChanging}></button>
        </div>
    )
}

export default ChangeAbleRoundedImg;