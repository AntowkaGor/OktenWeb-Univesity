const fs = require('fs');
const path = require('path');

function copyFileFunc(from, to, dir) {
    fs.readdir(path.join(`${dir}`), (err, files) => {
        files.forEach(file => {
            fs.rename(path.join(`${from}`, `${file}`), path.join(`${to}`, `${file}`), err => {
                console.log(err);
            })
        })
    })
}


const bufferDelay = () => {
    return new Promise((resolve, reject) => setTimeout(resolve));
}
bufferDelay()
    .then(() => {
        copyFileFunc(`1800`, `./buffer`, './1800');
        return bufferDelay()
    })
    .then(() => {
        copyFileFunc(`./2000`, `./1800`, './2000');
        return bufferDelay()
    })
    .then(() => {
        copyFileFunc(`./buffer`, `./2000`, './buffer');
    })