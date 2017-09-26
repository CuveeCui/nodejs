let fs = require('fs');


let readStream = fs.createReadStream('logo.png');

let writeStream = fs.createWriteStream('../logo_04.png');


readStream.pipe(writeStream);