
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
            msg.email = `${userData.email} är en ogiltig epost.`;
        }
    } else {
        isValid = false;
        msg.email = `E-post är obligatoriskt.`;
    }

    if (userData.password) {
        if (!validPassword(userData.password)) {
            isValid = false;
            msg.password = `${userData.password} är ett ogiltigt lösenord.`;
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
            msg.p_nr = `${userData.p_nr} är inte ett tolvsiffrigt personnummer.`;
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
            msg.postal_code = `${userData.postal_code} är inte ett femsiffrigt postnummer.`;
        }
    } else {
        isValid = false;
        msg.postal_code = `PostNummer är obligatoriskt.`;
    }
    if (userData.telephone) {
        if (!validTelephone(userData.telephone)) {
            isValid = false;
            msg.telephone = `${userData.telephone} är ett ogiltigt telefonnummer.`;
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
    let isValid = true;
    let msg = {};
    if (newData.email) {
        if (!validEmail(newData.email)) {
            isValid = false;
            msg.email = `${newData.email} är en ogiltig epostadress.`;
        }
    } else {
        isValid = false;
        msg.email = `E-post är obligatoriskt.`;
    }
    if (newData.personNumber) {
        if (!validPersonalNumber(newData.personNumber)) {
            isValid = false;
            msg.personNumber = `${newData.personNumber} är inte ett tolvsiffrigt personnummer.`;
        }
    } else {
        isValid = false;
        msg.personNumber = `Personnummer är obligatoriskt.`;
    }
    if (newData.postalCode) {
        if (!validPostalCode(newData.postalCode)) {
            isValid = false;
            msg.postalCode = `${newData.postalCode} är inte ett femsiffrigt postnummer.`;
        }
    } else {
        isValid = false;
        msg.postalCode = `PostNummer är obligatoriskt.`;
    }
    if (newData.phone) {
        if (!validTelephone(newData.phone)) {
            isValid = false;
            msg.phone = `${newData.phone} är ett ogiltigt telefonnummer.`;
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