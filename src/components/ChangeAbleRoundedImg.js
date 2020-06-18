import React, { useState } from 'react'
import '../css/ChangeAbleRoundedImg.css'
import RoundedImg from './RoundedImg'

const ChangeAbleRoundedImg = ({ src, alt, handleClick }) => {
    //temp
    const [shownImg, setShownImg] = useState(src)

    const handelImgChanging = () => {
        const input = document.getElementById('changeUserImg');
        input.click();
    }

    const handelChange = (e) => {
        var img = e.target.files[0];
        var reader = new FileReader();
        let imgAsSrcValue;
        reader.onload = function () {
            imgAsSrcValue = reader.result
            setShownImg(imgAsSrcValue);
        };
        reader.readAsDataURL(img);
        handleClick(e.target.files[0], imgAsSrcValue);
    }

    return (
        <div className='ChangeAbleRoundedImg'>
            <input type='file' id='changeUserImg' accept="image/png,image/jpeg" onChange={handelChange} />
            <RoundedImg src={shownImg} alt={alt} id='USERACCOUNTIMG' />
            <button onClick={handelImgChanging}></button>
        </div>
    )
}

export default ChangeAbleRoundedImg;