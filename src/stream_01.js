let fs = require('fs');

const source = fs.readFileSync('logo.png');

fs.writeFileSync('../logo_01.png');

//文件居然破损了