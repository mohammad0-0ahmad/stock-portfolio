const fs = require("fs");
exports.mkdir = (path) => {
    return new Promise((resolve) => {
        fs.mkdir(path, { recursive: true }, (err) => {
            if (err) {
                console.log(err)
                resolve(false);
            } else {
                resolve(true);
            }
        });
    })
}