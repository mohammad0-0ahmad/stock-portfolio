import React from 'react'
import "../css/ContactInfo.css";

const ContactInfo = ({ phone, email, address, zipCode, city }) => {
    return (
        <div className='ContactInfo'>
            <p>Kontaktuppgifter</p>
            <div>
                <div><p>Telefon:</p><br /><p>Mail:</p><br /><p>Adress:</p><br /><p>Postnummer:</p><br /><p>Postort:</p><br /></div>
                <div><p>{phone}</p><br /><p>{email}</p><br /><p>{address}</p><br /><p>{zipCode}</p><br /><p>{city}</p><br /></div>
            </div>
        </div>
    )
}

export default ContactInfo;