import React from 'react'
import "../css/ContactInfo.css";

const ContactInfo = ({ phone, email, address = ' ', postalCode, city = ' ' }) => {
    return (
        <div className='ContactInfo'>
            <p>Kontaktuppgifter</p>
            <div>
                <div>
                    <p>Telefon:</p>
                    <p>Mail:</p>
                    <p>Adress:</p>
                    <p>Postnummer:</p>
                    <p>Postort:</p>
                </div>
                <div>
                    <p>{phone}</p>
                    <p>{email}</p>
                    <p>{address}</p>
                    <p>{postalCode}</p>
                    <p>{city}</p>
                </div>
            </div>
        </div>
    )
}

export default ContactInfo;