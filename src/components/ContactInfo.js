import React from 'react'
import "../css/ContactInfo.css";

const ContactInfo = ({ person }) => {
    const { phone, mail, adress, zipCode, city } = person
    return (
        <div className='ContactInfo'>
            <p>Kontaktuppgifter</p>
            <div>
                <div><p>Telefon:</p><br /><p>Mail:</p><br /><p>Adress:</p><br /><p>Postnummer:</p><br /><p>Postort:</p><br /></div>
                <div><p>{phone}</p><br /><p>{mail}</p><br /><p>{adress}</p><br /><p>{zipCode}</p><br /><p>{city}</p><br /></div>
            </div>
        </div>
    )
}

export default ContactInfo;