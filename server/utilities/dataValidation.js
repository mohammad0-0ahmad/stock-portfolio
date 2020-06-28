
const validEmail = (email) => {
    /* source: https://www.w3resource.com/javascript/form/email-validation.php */
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        return true
    }
    return false
}
const validPassword = (password) => {
    if (/(?=.*[a-z])(?=.*[0-9])(?=.*[A-Z])[\w\d]{8,}/.test(password)) {
        return true
    }
    return false
}
const validPersonalNumber = (personalNumber) => {
    if (/^\d{12}$/.test(personalNumber)) {
        return true;
    }
    return false;
}
const validPostalCode = (postalCode) => {
    if (/^\d{5}$/.test(postalCode)) {
        return true;
    }
    return false;
}
const validTelephone = (telephone) => {
    if (/^[0-9]{10,15}$/.test(telephone)) {
        return true;
    }
    return false;
}

exports.userRegisterationValidation = (userData) => {
    const { password, email, f_name, l_name, address, postal_code, city, telephone, p_nr } = userData

    let isValid = true;
    let msg = {};

    if (email) {
        if (!validEmail(email)) {
            isValid = false;
            msg.email = `${email} är en ogiltig epost.`;
        }
    } else {
        isValid = false;
        msg.email = `E-post är obligatoriskt.`;
    }

    if (password) {
        if (!validPassword(password)) {
            isValid = false;
            msg.password = `${password} är ett ogiltigt lösenord.`;
        }
    } else {
        isValid = false;
        msg.password = `Lösenord är obligatoriskt.`;
    }

    if (!f_name) {
        isValid = false;
        msg.f_name = `Förnamn är obligatoriskt.`;
    }

    if (!l_name) {
        isValid = false;
        msg.l_name = `Efternamn är obligatoriskt.`;
    }

    if (p_nr) {
        if (!validPersonalNumber(p_nr)) {
            isValid = false;
            msg.p_nr = `${p_nr} är inte ett tolvsiffrigt personnummer.`;
        }
    } else {
        isValid = false;
        msg.p_nr = `Personnummer är obligatoriskt.`;
    }

    if (!address) {
        isValid = false;
        msg.address = `Adressen är obligatoriskt.`;
    }
    if (!city) {
        isValid = false;
        msg.city = `Postort är obligatoriskt.`;
    }
    if (postal_code) {
        if (!validPostalCode(postal_code)) {
            isValid = false;
            msg.postal_code = `${postal_code} är inte ett femsiffrigt postnummer.`;
        }
    } else {
        isValid = false;
        msg.postal_code = `PostNummer är obligatoriskt.`;
    }
    if (telephone) {
        if (!validTelephone(telephone)) {
            isValid = false;
            msg.telephone = `${telephone} är ett ogiltigt telefonnummer.`;
        }
    } else {
        isValid = false;
        msg.telephone = `Telefonnummer är obligatoriskt.`;
    }
    if (isValid)
        return { isValid };
    else return {
        isValid,
        msg
    }
}
exports.userChangeDataValidation = (newData) => {
    const { personalNumber, email, postalCode, phone } = newData

    let isValid = true;
    let msg = {};
    if (email) {
        if (!validEmail(email)) {
            isValid = false;
            msg.email = `${email} är en ogiltig epostadress.`;
        }
    } else {
        isValid = false;
        msg.email = `E-post är obligatoriskt.`;
    }
    if (personalNumber) {
        if (!validPersonalNumber(personalNumber)) {
            isValid = false;
            msg.personalNumber = `${personalNumber} är inte ett tolvsiffrigt personnummer.`;
        }
    } else {
        isValid = false;
        msg.personalNumber = `Personnummer är obligatoriskt.`;
    }
    if (postalCode) {
        if (!validPostalCode(postalCode)) {
            isValid = false;
            msg.postalCode = `${postalCode} är inte ett femsiffrigt postnummer.`;
        }
    } else {
        isValid = false;
        msg.postalCode = `PostNummer är obligatoriskt.`;
    }
    if (phone) {
        if (!validTelephone(phone)) {
            isValid = false;
            msg.phone = `${phone} är ett ogiltigt telefonnummer.`;
        }
    } else {
        isValid = false;
        msg.phone = `Telefonnummer är obligatoriskt.`;
    }
    if (isValid)
        return { isValid };
    else return {
        isValid,
        msg
    }
}


exports.isValidEmail = validEmail;
exports.isValidPassword = validPassword;