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
    let isValid = true;
    let msg = '';

    if (userData.email) {
        if (!validEmail(userData.email)) {
            isValid = false;
            msg += `${userData.email} är ogiltigt epost.\n`;
        }
    } else {
        isValid = false;
        msg += `E-post är obligatoriskt.\n`;
    }

    if (userData.password) {
        if (!validPassword(userData.password)) {
            isValid = false;
            msg += `${userData.password} är ogiltigt lösenord.\n`;
        }
    } else {
        isValid = false;
        msg += `Lösenord är obligatoriskt.\n`;
    }

    if (!userData.f_name) {
        isValid = false;
        msg += `Förnamn är obligatoriskt.\n`;
    }

    if (!userData.l_name) {
        isValid = false;
        msg += `Efternamn är obligatoriskt.\n`;
    }

    if (userData.p_nr) {
        if (!validPersonalNumber(userData.p_nr)) {
            isValid = false;
            msg += `${userData.p_nr} är inte 12 siffrig personnummer.\n`;
        }
    } else {
        isValid = false;
        msg += `Personnummer är obligatoriskt.\n`;
    }

    if (!userData.address) {
        isValid = false;
        msg += `Adressen är obligatoriskt.\n`;
    }
    if (!userData.city) {
        isValid = false;
        msg += `Postort är obligatoriskt.\n`;
    }
    if (userData.postal_code) {
        if (!validPostalCode(userData.postal_code)) {
            isValid = false;
            msg += `${userData.postal_code} är inte 5 siffrig postnummer.\n`;
        }
    } else {
        isValid = false;
        msg += `PostNummer är obligatoriskt.\n`;
    }
    if (userData.telephone) {
        if (!validTelephone(userData.telephone)) {
            isValid = false;
            msg += `${userData.telephone} är ogiltigt telefonnummer.\n`;
        }
    } else {
        isValid = false;
        msg += `Telefonnummer är obligatoriskt.\n`;
    }
    if (isValid)
        return { isValid };
    else return {
        isValid,
        msg
    }
}