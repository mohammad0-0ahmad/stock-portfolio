
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
    let msg = {};

    if (userData.email) {
        if (!validEmail(userData.email)) {
            isValid = false;
            msg.email = `${userData.email} är ogiltigt epost.`;
        }
    } else {
        isValid = false;
        msg.email = `E-post är obligatoriskt.`;
    }

    if (userData.password) {
        if (!validPassword(userData.password)) {
            isValid = false;
            msg.password = `${userData.password} är ogiltigt lösenord.`;
        }
    } else {
        isValid = false;
        msg.password = `Lösenord är obligatoriskt.`;
    }

    if (!userData.f_name) {
        isValid = false;
        msg.f_name = `Förnamn är obligatoriskt.`;
    }

    if (!userData.l_name) {
        isValid = false;
        msg.l_name = `Efternamn är obligatoriskt.`;
    }

    if (userData.p_nr) {
        if (!validPersonalNumber(userData.p_nr)) {
            isValid = false;
            msg.p_nr = `${userData.p_nr} är inte 12 siffrig personnummer.`;
        }
    } else {
        isValid = false;
        msg.p_nr = `Personnummer är obligatoriskt.`;
    }

    if (!userData.address) {
        isValid = false;
        msg.address = `Adressen är obligatoriskt.`;
    }
    if (!userData.city) {
        isValid = false;
        msg.city = `Postort är obligatoriskt.`;
    }
    if (userData.postal_code) {
        if (!validPostalCode(userData.postal_code)) {
            isValid = false;
            msg.postal_code = `${userData.postal_code} är inte 5 siffrig postnummer.`;
        }
    } else {
        isValid = false;
        msg.postal_code = `PostNummer är obligatoriskt.`;
    }
    if (userData.telephone) {
        if (!validTelephone(userData.telephone)) {
            isValid = false;
            msg.telephone = `${userData.telephone} är ogiltigt telefonnummer.`;
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
exports.updateFunctions = {
    validEmail,
    validPassword,
    validPersonalNumber,
    validPostalCode,
    validTelephone,
}
//temp

exports.isValidEmail = validEmail;
exports.isValidPassword = validPassword;