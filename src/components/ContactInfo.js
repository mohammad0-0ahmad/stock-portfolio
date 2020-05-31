import React from 'react'
import "./css/ContactInfo.css";

const ContactInfo = ({headingColor, contactsColor,person}) => {
    let style = {
        color: headingColor
    }
    let contactStyle = {
        color: contactsColor
    }

    return <div>
    <p style={style}>Kontaktuppgifter</p>
    <div className='contGrid' style={contactStyle}>
    <div><p>Telefon:</p><br/><p>Mail:</p><br/><p>Adress:</p><br/><p>Postnummer:</p><br/><p>Postort:</p><br/></div>
    <div><p>{person.phone}</p><br/><p>{person.mail}</p><br/><p>{person.adress}</p><br/><p>{person.zipCode}</p><br/><p>{person.city}</p><br/></div>
    </div>
    </div>
        
}

export default ContactInfo;