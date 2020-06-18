const bcrypt = require("bcrypt")
const hashSalt = 12;

exports.hash = (string) => {
    return new Promise((resolve, reject) => {
        bcrypt.hash(string, hashSalt, (err, hash) => {
            resolve(hash)
        })
    })
}
exports.compare =(string,hash)=>{
    return bcrypt.compare(string,hash)
}
